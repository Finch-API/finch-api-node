// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/employer/benefits',
  operationId: 'create-company-benefits',
};

export const tool: Tool = {
  name: 'create_hris_benefits',
  description:
    'Creates a new company-wide deduction or contribution. Please use the `/providers` endpoint to view available types for each provider.',
  inputSchema: {
    type: 'object',
    properties: {
      company_contribution: {
        type: 'object',
        title: 'BenefitCompanyMatchContribution',
        description: 'The company match for this benefit.',
        properties: {
          tiers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                match: {
                  type: 'integer',
                },
                threshold: {
                  type: 'integer',
                },
              },
              required: [],
            },
          },
          type: {
            type: 'string',
            enum: ['match'],
          },
        },
        required: [],
      },
      description: {
        type: 'string',
        title: 'BenefitDescription',
        description:
          'Name of the benefit as it appears in the provider and pay statements. Recommend limiting this to <30 characters due to limitations in specific providers (e.g. Justworks).',
      },
      frequency: {
        $ref: '#/$defs/benefit_frequency',
      },
      type: {
        $ref: '#/$defs/benefit_type',
      },
    },
    $defs: {
      benefit_frequency: {
        type: 'string',
        title: 'BenefitFrequency',
        description: 'The frequency of the benefit deduction/contribution.',
        enum: ['one_time', 'every_paycheck', 'monthly'],
      },
      benefit_type: {
        type: 'string',
        title: 'BenefitType',
        description: 'Type of benefit.',
        enum: [
          '457',
          '401k',
          '401k_roth',
          '401k_loan',
          '403b',
          '403b_roth',
          '457_roth',
          'commuter',
          'custom_post_tax',
          'custom_pre_tax',
          'fsa_dependent_care',
          'fsa_medical',
          'hsa_post',
          'hsa_pre',
          's125_dental',
          's125_medical',
          's125_vision',
          'simple',
          'simple_ira',
        ],
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.hris.benefits.create(body);
};

export default { metadata, tool, handler };
