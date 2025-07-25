// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.connections.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sandbox/connections/accounts',
  operationId: 'post-sandbox-connections-accounts',
};

export const tool: Tool = {
  name: 'create_connections_sandbox_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new account for an existing connection (company/provider pair)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    access_token: {\n      type: 'string'\n    },\n    account_id: {\n      type: 'string',\n      description: '[DEPRECATED] Use `connection_id` to associate a connection with an access token'\n    },\n    authentication_type: {\n      type: 'string',\n      title: 'AuthenticationType',\n      enum: [        'credential',\n        'api_token',\n        'oauth',\n        'assisted'\n      ]\n    },\n    company_id: {\n      type: 'string',\n      description: '[DEPRECATED] Use `connection_id` to associate a connection with an access token'\n    },\n    connection_id: {\n      type: 'string',\n      description: 'The ID of the new connection'\n    },\n    products: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    provider_id: {\n      type: 'string',\n      description: 'The ID of the provider associated with the `access_token`'\n    }\n  },\n  required: [    'access_token',\n    'account_id',\n    'authentication_type',\n    'company_id',\n    'connection_id',\n    'products',\n    'provider_id'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
        description: 'The provider associated with the `access_token`',
      },
      authentication_type: {
        type: 'string',
        title: 'AuthenticationType',
        enum: ['credential', 'api_token', 'oauth', 'assisted'],
      },
      products: {
        type: 'array',
        description:
          'Optional, defaults to Organization products (`company`, `directory`, `employment`, `individual`)',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['company_id', 'provider_id'],
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.sandbox.connections.accounts.create(body)));
};

export default { metadata, tool, handler };
