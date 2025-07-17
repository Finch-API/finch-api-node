// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'account',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/introspect',
  operationId: 'get-introspect',
};

export const tool: Tool = {
  name: 'introspect_account',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead account information associated with an `access_token`\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/introspection',\n  $defs: {\n    introspection: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The Finch UUID of the token being introspected.'\n        },\n        account_id: {\n          type: 'string',\n          description: '[DEPRECATED] Use `connection_id` to associate tokens with a Finch connection instead of this account ID.'\n        },\n        authentication_methods: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              connection_status: {\n                type: 'object',\n                properties: {\n                  message: {\n                    type: 'string'\n                  },\n                  status: {\n                    $ref: '#/$defs/connection_status_type'\n                  }\n                }\n              },\n              products: {\n                type: 'array',\n                description: 'An array of the authorized products associated with the `access_token`.',\n                items: {\n                  type: 'string'\n                }\n              },\n              type: {\n                type: 'string',\n                description: 'The type of authentication method.',\n                enum: [                  'assisted',\n                  'credential',\n                  'api_token',\n                  'api_credential',\n                  'oauth'\n                ]\n              }\n            }\n          }\n        },\n        client_id: {\n          type: 'string',\n          description: 'The client ID of the application associated with the `access_token`.'\n        },\n        client_type: {\n          type: 'string',\n          title: 'ClientType',\n          description: 'The type of application associated with a token.',\n          enum: [            'production',\n            'development',\n            'sandbox'\n          ]\n        },\n        company_id: {\n          type: 'string',\n          description: '[DEPRECATED] Use `connection_id` to associate tokens with a Finch connection instead of this company ID.'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'The Finch UUID of the connection associated with the `access_token`.'\n        },\n        connection_status: {\n          type: 'object',\n          properties: {\n            last_successful_sync: {\n              type: 'string',\n              description: 'The datetime when the connection was last successfully synced.',\n              format: 'date-time'\n            },\n            message: {\n              type: 'string'\n            },\n            status: {\n              $ref: '#/$defs/connection_status_type'\n            }\n          }\n        },\n        connection_type: {\n          type: 'string',\n          title: 'ConnectionType',\n          description: 'The type of the connection associated with the token.\\n- `provider` - connection to an external provider\\n- `finch` - finch-generated data.',\n          enum: [            'provider',\n            'finch'\n          ]\n        },\n        customer_email: {\n          type: 'string',\n          description: 'The email of your customer you provided to Finch when a connect session was created for this connection.'\n        },\n        customer_id: {\n          type: 'string',\n          description: 'The ID of your customer you provided to Finch when a connect session was created for this connection.'\n        },\n        customer_name: {\n          type: 'string',\n          description: 'The name of your customer you provided to Finch when a connect session was created for this connection.'\n        },\n        manual: {\n          type: 'boolean',\n          description: 'Whether the connection associated with the `access_token` uses the Assisted Connect Flow. (`true` if using Assisted Connect, `false` if connection is automated)'\n        },\n        payroll_provider_id: {\n          type: 'string',\n          description: '[DEPRECATED] Use `provider_id` to identify the provider instead of this payroll provider ID.'\n        },\n        products: {\n          type: 'array',\n          description: 'An array of the authorized products associated with the `access_token`.',\n          items: {\n            type: 'string'\n          }\n        },\n        provider_id: {\n          type: 'string',\n          description: 'The ID of the provider associated with the `access_token`.'\n        },\n        username: {\n          type: 'string',\n          description: 'The account username used for login associated with the `access_token`.'\n        }\n      },\n      required: [        'id',\n        'account_id',\n        'authentication_methods',\n        'client_id',\n        'client_type',\n        'company_id',\n        'connection_id',\n        'connection_status',\n        'connection_type',\n        'customer_email',\n        'customer_id',\n        'customer_name',\n        'manual',\n        'payroll_provider_id',\n        'products',\n        'provider_id',\n        'username'\n      ]\n    },\n    connection_status_type: {\n      type: 'string',\n      title: 'ConnectionStatus',\n      enum: [        'pending',\n        'processing',\n        'connected',\n        'error_no_account_setup',\n        'error_permissions',\n        'reauth'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.account.introspect()));
};

export default { metadata, tool, handler };
