// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'connect.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/connect/sessions/reauthenticate',
  operationId: 'post-connect-sessions-reauthenticate',
};

export const tool: Tool = {
  name: 'reauthenticate_connect_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new Connect session for reauthenticating an existing connection\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    connect_url: {\n      type: 'string',\n      description: 'The Connect URL to redirect the user to for reauthentication'\n    },\n    session_id: {\n      type: 'string',\n      description: 'The unique identifier for the created connect session'\n    }\n  },\n  required: [    'connect_url',\n    'session_id'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
        description: 'The ID of the existing connection to reauthenticate',
      },
      minutes_to_expire: {
        type: 'integer',
        description: 'The number of minutes until the session expires (defaults to 43,200, which is 30 days)',
      },
      products: {
        type: 'array',
        description: 'The products to request access to (optional for reauthentication)',
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
      redirect_uri: {
        type: 'string',
        description: 'The URI to redirect to after the Connect flow is completed',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.connect.sessions.reauthenticate(body)));
};

export default { metadata, tool, handler };
