# Finch TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export FINCH_ACCESS_TOKEN="My Access Token"
export FINCH_CLIENT_ID="4ab15e51-11ad-49f4-acae-f343b7794375"
export FINCH_CLIENT_SECRET="My Client Secret"
export FINCH_WEBHOOK_SECRET="My Webhook Secret"
npx -y @tryfinch/finch-api-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "tryfinch_finch_api_api": {
      "command": "npx",
      "args": ["-y", "@tryfinch/finch-api-mcp"],
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

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40tryfinch%2Ffinch-api-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB0cnlmaW5jaC9maW5jaC1hcGktbWNwIl0sImVudiI6eyJGSU5DSF9BQ0NFU1NfVE9LRU4iOiJNeSBBY2Nlc3MgVG9rZW4iLCJGSU5DSF9DTElFTlRfSUQiOiI0YWIxNWU1MS0xMWFkLTQ5ZjQtYWNhZS1mMzQzYjc3OTQzNzUiLCJGSU5DSF9DTElFTlRfU0VDUkVUIjoiTXkgQ2xpZW50IFNlY3JldCIsIkZJTkNIX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40tryfinch%2Ffinch-api-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40tryfinch%2Ffinch-api-mcp%22%5D%2C%22env%22%3A%7B%22FINCH_ACCESS_TOKEN%22%3A%22My%20Access%20Token%22%2C%22FINCH_CLIENT_ID%22%3A%224ab15e51-11ad-49f4-acae-f343b7794375%22%2C%22FINCH_CLIENT_SECRET%22%3A%22My%20Client%20Secret%22%2C%22FINCH_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add tryfinch_finch_api_mcp_api --env FINCH_ACCESS_TOKEN="My Access Token" FINCH_CLIENT_ID="4ab15e51-11ad-49f4-acae-f343b7794375" FINCH_CLIENT_SECRET="My Client Secret" FINCH_WEBHOOK_SECRET="My Webhook Secret" -- npx -y @tryfinch/finch-api-mcp
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

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
