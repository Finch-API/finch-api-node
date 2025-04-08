// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits.individuals',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'enrolled_ids_benefits_hris_individuals',
  description: 'Lists individuals currently enrolled in a given deduction.',
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
  return client.hris.benefits.individuals.enrolledIds(benefit_id);
};

export default { metadata, tool, handler };
