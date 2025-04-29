// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_hris_benefits',
  description: 'Updates an existing company-wide deduction or contribution',
  inputSchema: {
    type: 'object',
    properties: {
      benefit_id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Updated name or description.',
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const { benefit_id, ...body } = args as any;
  return client.hris.benefits.update(benefit_id, body);
};

export default { metadata, tool, handler };
