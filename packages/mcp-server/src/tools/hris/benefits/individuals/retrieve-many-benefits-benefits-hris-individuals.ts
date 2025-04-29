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
  name: 'retrieve_many_benefits_benefits_hris_individuals',
  description: 'Get enrollment information for the given individuals.',
  inputSchema: {
    type: 'object',
    properties: {
      benefit_id: {
        type: 'string',
      },
      individual_ids: {
        type: 'string',
        description:
          'comma-delimited list of stable Finch uuids for each individual. If empty, defaults to all individuals',
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const { benefit_id, ...body } = args as any;
  return client.hris.benefits.individuals.retrieveManyBenefits(benefit_id, body);
};

export default { metadata, tool, handler };
