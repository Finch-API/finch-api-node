// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/benefits',
  operationId: 'get-company-benefits',
};

export const tool: Tool = {
  name: 'list_hris_benefits',
  description: 'List all company-wide deductions and contributions.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.hris.benefits.list());
};

export default { metadata, tool, handler };
