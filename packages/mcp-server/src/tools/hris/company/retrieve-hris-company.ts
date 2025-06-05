// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.company',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/company',
  operationId: 'get-company',
};

export const tool: Tool = {
  name: 'retrieve_hris_company',
  description: 'Read basic company data',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.hris.company.retrieve());
};

export default { metadata, tool, handler };
