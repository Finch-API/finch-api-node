// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'account',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/disconnect',
  operationId: 'post-disconnect',
};

export const tool: Tool = {
  name: 'disconnect_account',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDisconnect one or more `access_token`s from your application.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/disconnect_response',\n  $defs: {\n    disconnect_response: {\n      type: 'object',\n      properties: {\n        status: {\n          type: 'string',\n          description: 'If the request is successful, Finch will return “success” (HTTP 200 status).'\n        }\n      },\n      required: [        'status'\n      ]\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.account.disconnect()));
};

export default { metadata, tool, handler };
