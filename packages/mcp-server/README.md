# Finch TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/finch-typescript.git
cd finch-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export FINCH_ACCESS_TOKEN="My Access Token"
export FINCH_CLIENT_ID="4ab15e51-11ad-49f4-acae-f343b7794375"
export FINCH_CLIENT_SECRET="My Client Secret"
export FINCH_WEBHOOK_SECRET="My Webhook Secret"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y @tryfinch/finch-api-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "tryfinch_finch_api_api": {
      "command": "node",
      "args": ["/path/to/local/finch-typescript/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "FINCH_ACCESS_TOKEN": "My Access Token",
        "FINCH_CLIENT_ID": "4ab15e51-11ad-49f4-acae-f343b7794375",
        "FINCH_CLIENT_SECRET": "My Client Secret",
        "FINCH_WEBHOOK_SECRET": "My Webhook Secret"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer or Basic scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------------------- | ------------------------ | --------------- |
| `x-finch-client-id` | `clientID` | basicAuth |
| `x-finch-client-secret` | `clientSecret` | basicAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "tryfinch_finch_api_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@tryfinch/finch-api-mcp/server";

// import a specific tool
import createAccessTokens from "@tryfinch/finch-api-mcp/tools/access-tokens/create-access-tokens";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createAccessTokens, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `access_tokens`:

- `create_access_tokens` (`write`): Exchange the authorization code for an access token

### Resource `hris.company`:

- `retrieve_hris_company` (`read`): Read basic company data

### Resource `hris.company.pay_statement_item`:

- `list_company_hris_pay_statement_item` (`read`): **Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon
  Retrieve a list of detailed pay statement items for the access token's connection account.

### Resource `hris.company.pay_statement_item.rules`:

- `create_pay_statement_item_company_hris_rules` (`write`): **Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon
  Custom rules can be created to associate specific attributes to pay statement items depending on the use case. For example, pay statement items that meet certain conditions can be labeled as a pre-tax 401k. This metadata can be retrieved where pay statement item information is available.
- `update_pay_statement_item_company_hris_rules` (`write`): **Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon
  Update a rule for a pay statement item.
- `list_pay_statement_item_company_hris_rules` (`read`): **Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon
  List all rules of a connection account.
- `delete_pay_statement_item_company_hris_rules` (`write`): **Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon
  Delete a rule for a pay statement item.

### Resource `hris.directory`:

- `list_hris_directory` (`read`): Read company directory and organization structure

### Resource `hris.individuals`:

- `retrieve_many_hris_individuals` (`write`): Read individual data, excluding income and employment data

### Resource `hris.employments`:

- `retrieve_many_hris_employments` (`write`): Read individual employment and income data

### Resource `hris.payments`:

- `list_hris_payments` (`read`): Read payroll and contractor related payments by the company.

### Resource `hris.pay_statements`:

- `retrieve_many_hris_pay_statements` (`write`): Read detailed pay statements for each individual.

  Deduction and contribution types are supported by the payroll systems that supports Benefits.

### Resource `hris.documents`:

- `list_hris_documents` (`read`): **Beta:** This endpoint is in beta and may change.
  Retrieve a list of company-wide documents.
- `retreive_hris_documents` (`read`): **Beta:** This endpoint is in beta and may change.
  Retrieve details of a specific document by its ID.

### Resource `hris.benefits`:

- `create_hris_benefits` (`write`): Creates a new company-wide deduction or contribution. Please use the `/providers` endpoint to view available types for each provider.
- `retrieve_hris_benefits` (`read`): Lists deductions and contributions information for a given item
- `update_hris_benefits` (`write`): Updates an existing company-wide deduction or contribution
- `list_hris_benefits` (`read`): List all company-wide deductions and contributions.
- `list_supported_benefits_hris_benefits` (`read`): Get deductions metadata

### Resource `hris.benefits.individuals`:

- `enroll_many_benefits_hris_individuals` (`write`): Enroll an individual into a deduction or contribution. This is an overwrite operation. If the employee is already enrolled, the enrollment amounts will be adjusted. Making the same request multiple times will not create new enrollments, but will continue to set the state of the existing enrollment.
- `enrolled_ids_benefits_hris_individuals` (`read`): Lists individuals currently enrolled in a given deduction.
- `retrieve_many_benefits_benefits_hris_individuals` (`read`): Get enrollment information for the given individuals.
- `unenroll_many_benefits_hris_individuals` (`write`): Unenroll individuals from a deduction or contribution

### Resource `providers`:

- `list_providers` (`read`): Return details on all available payroll and HR systems.

### Resource `account`:

- `disconnect_account` (`write`): Disconnect one or more `access_token`s from your application.
- `introspect_account` (`read`): Read account information associated with an `access_token`

### Resource `request_forwarding`:

- `forward_request_forwarding` (`write`): The Forward API allows you to make direct requests to an employment system. If Finch's unified API
  doesn't have a data model that cleanly fits your needs, then Forward allows you to push or pull
  data models directly against an integration's API.

### Resource `jobs.automated`:

- `create_jobs_automated` (`write`): Enqueue an automated job.

  `data_sync_all`: Enqueue a job to re-sync all data for a connection. `data_sync_all` has a concurrency limit of 1 job at a time per connection. This means that if this endpoint is called while a job is already in progress for this connection, Finch will return the `job_id` of the job that is currently in progress. Finch allows a fixed window rate limit of 1 forced refresh per hour per connection.

  `w4_form_employee_sync`: Enqueues a job for sync W-4 data for a particular individual, identified by `individual_id`. This feature is currently in beta.

  This endpoint is available for _Scale_ tier customers as an add-on. To request access to this endpoint, please contact your Finch account manager.

- `retrieve_jobs_automated` (`read`): Get an automated job by `job_id`.
- `list_jobs_automated` (`read`): Get all automated jobs. Automated jobs are completed by a machine. By default, jobs are sorted in descending order by submission time. For scheduled jobs such as data syncs, only the next scheduled job is shown.

### Resource `jobs.manual`:

- `retrieve_jobs_manual` (`read`): Get a manual job by `job_id`. Manual jobs are completed by a human and include Assisted Benefits jobs.

### Resource `sandbox.connections`:

- `create_sandbox_connections` (`write`): Create a new connection (new company/provider pair) with a new account

### Resource `sandbox.connections.accounts`:

- `create_connections_sandbox_accounts` (`write`): Create a new account for an existing connection (company/provider pair)
- `update_connections_sandbox_accounts` (`write`): Update an existing sandbox account. Change the connection status to understand how the Finch API responds.

### Resource `sandbox.company`:

- `update_sandbox_company` (`write`): Update a sandbox company's data

### Resource `sandbox.directory`:

- `create_sandbox_directory` (`write`): Add new individuals to a sandbox company

### Resource `sandbox.individual`:

- `update_sandbox_individual` (`write`): Update sandbox individual

### Resource `sandbox.employment`:

- `update_sandbox_employment` (`write`): Update sandbox employment

### Resource `sandbox.payment`:

- `create_sandbox_payment` (`write`): Add a new sandbox payment

### Resource `sandbox.jobs`:

- `create_sandbox_jobs` (`write`): Enqueue a new sandbox job

### Resource `sandbox.jobs.configuration`:

- `retrieve_jobs_sandbox_configuration` (`read`): Get configurations for sandbox jobs
- `update_jobs_sandbox_configuration` (`write`): Update configurations for sandbox jobs

### Resource `payroll.pay_groups`:

- `retrieve_payroll_pay_groups` (`read`): Read information from a single pay group
- `list_payroll_pay_groups` (`read`): Read company pay groups and frequencies

### Resource `connect.sessions`:

- `new_connect_sessions` (`write`): Create a new connect session for an employer
- `reauthenticate_connect_sessions` (`write`): Create a new Connect session for reauthenticating an existing connection
