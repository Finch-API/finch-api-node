// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits.individuals',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/employer/benefits/{benefit_id}/individuals',
  operationId: 'delete-individual-benefits',
};

export const tool: Tool = {
  name: 'unenroll_many_benefits_hris_individuals',
  description: 'Unenroll individuals from a deduction or contribution',
  inputSchema: {
    type: 'object',
    properties: {
      benefit_id: {
        type: 'string',
      },
      individual_ids: {
        type: 'array',
        description: 'Array of individual_ids to unenroll.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { benefit_id, ...body } = args as any;
  return asTextContentResult(await client.hris.benefits.individuals.unenrollMany(benefit_id, body));
};

export default { metadata, tool, handler };
