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
  name: 'create_hris_benefits',
  description:
    'Creates a new company-wide deduction or contribution. Please use the `/providers` endpoint to view available types for each provider.',
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
        title: 'BenefitDescription',
        description:
          'Name of the benefit as it appears in the provider and pay statements. Recommend limiting this to <30 characters due to limitations in specific providers (e.g. Justworks).',
      },
      frequency: {
        type: 'string',
        title: 'BenefitFrequency',
        description: 'The frequency of the benefit deduction/contribution.',
        enum: ['one_time', 'every_paycheck', 'monthly'],
      },
      type: {
        type: 'string',
        title: 'BenefitType',
        description: 'Type of benefit.',
        enum: [
          '401k',
          '401k_roth',
          '401k_loan',
          '403b',
          '403b_roth',
          '457',
          '457_roth',
          's125_medical',
          's125_dental',
          's125_vision',
          'hsa_pre',
          'hsa_post',
          'fsa_medical',
          'fsa_dependent_care',
          'simple_ira',
          'simple',
          'commuter',
          'custom_post_tax',
          'custom_pre_tax',
        ],
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { ...body } = args;
  return client.hris.benefits.create(body);
};

export default { metadata, tool, handler };
