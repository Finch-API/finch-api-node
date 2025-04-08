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
  name: 'retrieve_hris_benefits',
  description: 'Lists deductions and contributions information for a given item',
  inputSchema: {
    type: 'object',
    properties: {
      benefit_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { benefit_id } = args;
  return client.hris.benefits.retrieve(benefit_id);
};

export default { metadata, tool, handler };
