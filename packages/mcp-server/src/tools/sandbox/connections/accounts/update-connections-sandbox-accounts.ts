// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.connections.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sandbox/connections/accounts',
  operationId: 'put-sandbox-connections-accounts',
};

export const tool: Tool = {
  name: 'update_connections_sandbox_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing sandbox account. Change the connection status to understand how the Finch API responds.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    account_id: {\n      type: 'string',\n      description: '[DEPRECATED] Use `connection_id` to associate a connection with an access token'\n    },\n    authentication_type: {\n      type: 'string',\n      title: 'AuthenticationType',\n      enum: [        'credential',\n        'api_token',\n        'oauth',\n        'assisted'\n      ]\n    },\n    company_id: {\n      type: 'string',\n      description: '[DEPRECATED] Use `connection_id` to associate a connection with an access token'\n    },\n    products: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    provider_id: {\n      type: 'string',\n      description: 'The ID of the provider associated with the `access_token`'\n    },\n    connection_id: {\n      type: 'string',\n      description: 'The ID of the new connection'\n    }\n  },\n  required: [    'account_id',\n    'authentication_type',\n    'company_id',\n    'products',\n    'provider_id'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      connection_status: {
        $ref: '#/$defs/connection_status_type',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      connection_status_type: {
        type: 'string',
        title: 'ConnectionStatus',
        enum: ['pending', 'processing', 'connected', 'error_no_account_setup', 'error_permissions', 'reauth'],
      },
    },
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.sandbox.connections.accounts.update(body)));
};

export default { metadata, tool, handler };
