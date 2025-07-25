// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'providers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/providers',
  operationId: 'get-providers',
};

export const tool: Tool = {
  name: 'list_providers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturn details on all available payroll and HR systems.",
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const response = await client.providers.list().asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
