// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'access_tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/auth/token',
  operationId: 'create-access-token',
};

export const tool: Tool = {
  name: 'create_access_tokens',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExchange the authorization code for an access token\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/create_access_token_response',\n  $defs: {\n    create_access_token_response: {\n      type: 'object',\n      properties: {\n        access_token: {\n          type: 'string',\n          description: 'The access token for the connection.'\n        },\n        account_id: {\n          type: 'string',\n          description: '[DEPRECATED] Use `connection_id` to identify the connection instead of this account ID.'\n        },\n        client_type: {\n          type: 'string',\n          title: 'ClientType',\n          description: 'The type of application associated with a token.',\n          enum: [            'production',\n            'development',\n            'sandbox'\n          ]\n        },\n        company_id: {\n          type: 'string',\n          description: '[DEPRECATED] Use `connection_id` to identify the connection instead of this company ID.'\n        },\n        connection_id: {\n          type: 'string',\n          description: 'The Finch UUID of the connection associated with the `access_token`.'\n        },\n        connection_type: {\n          type: 'string',\n          title: 'ConnectionType',\n          description: 'The type of the connection associated with the token.\\n- `provider` - connection to an external provider\\n- `finch` - finch-generated data.',\n          enum: [            'provider',\n            'finch'\n          ]\n        },\n        products: {\n          type: 'array',\n          description: 'An array of the authorized products associated with the `access_token`.',\n          items: {\n            type: 'string'\n          }\n        },\n        provider_id: {\n          type: 'string',\n          description: 'The ID of the provider associated with the `access_token`.'\n        },\n        customer_id: {\n          type: 'string',\n          description: 'The ID of your customer you provided to Finch when a connect session was created for this connection.'\n        },\n        token_type: {\n          type: 'string',\n          description: 'The RFC 8693 token type (Finch uses `bearer` tokens)'\n        }\n      },\n      required: [        'access_token',\n        'account_id',\n        'client_type',\n        'company_id',\n        'connection_id',\n        'connection_type',\n        'products',\n        'provider_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
      },
      client_id: {
        type: 'string',
      },
      client_secret: {
        type: 'string',
      },
      redirect_uri: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['code'],
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.accessTokens.create(body)));
};

export default { metadata, tool, handler };
