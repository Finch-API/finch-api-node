// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'connect.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/connect/sessions',
  operationId: 'post-connect-sessions',
};

export const tool: Tool = {
  name: 'new_connect_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new connect session for an employer\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    connect_url: {\n      type: 'string',\n      description: 'The Connect URL to redirect the user to for authentication'\n    },\n    session_id: {\n      type: 'string',\n      description: 'The unique identifier for the created connect session'\n    }\n  },\n  required: [    'connect_url',\n    'session_id'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      customer_name: {
        type: 'string',
      },
      products: {
        type: 'array',
        items: {
          type: 'string',
          description: 'The Finch products that can be requested during the Connect flow.',
          enum: [
            'company',
            'directory',
            'individual',
            'employment',
            'payment',
            'pay_statement',
            'benefits',
            'ssn',
            'deduction',
            'documents',
          ],
        },
      },
      customer_email: {
        type: 'string',
      },
      integration: {
        type: 'object',
        properties: {
          auth_method: {
            type: 'string',
            enum: ['assisted', 'credential', 'oauth', 'api_token'],
          },
          provider: {
            type: 'string',
          },
        },
      },
      manual: {
        type: 'boolean',
      },
      minutes_to_expire: {
        type: 'number',
        description:
          'The number of minutes until the session expires (defaults to 129,600, which is 90 days)',
      },
      redirect_uri: {
        type: 'string',
      },
      sandbox: {
        type: 'string',
        enum: ['finch', 'provider'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id', 'customer_name', 'products'],
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.connect.sessions.new(body)));
};

export default { metadata, tool, handler };
