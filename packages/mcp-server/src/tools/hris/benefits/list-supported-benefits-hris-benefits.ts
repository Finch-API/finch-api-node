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
  httpPath: '/employer/benefits/meta',
  operationId: 'get-company-benefits-meta',
};

export const tool: Tool = {
  name: 'list_supported_benefits_hris_benefits',
  description: 'Get deductions metadata',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.hris.benefits.listSupportedBenefits());
};

export default { metadata, tool, handler };
