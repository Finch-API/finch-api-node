// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_supported_benefits_hris_benefits',
  description: 'Get deductions metadata',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Finch, args: any) => {
  const {} = args;
  return client.hris.benefits.listSupportedBenefits();
};

export default { metadata, tool, handler };
