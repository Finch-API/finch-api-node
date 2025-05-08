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
  name: 'list_hris_benefits',
  description: 'List all company-wide deductions and contributions.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  return client.hris.benefits.list();
};

export default { metadata, tool, handler };
