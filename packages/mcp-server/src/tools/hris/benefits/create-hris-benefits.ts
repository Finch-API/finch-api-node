// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new company-wide deduction or contribution. Please use the `/providers` endpoint to view available types for each provider.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/create_company_benefits_response',\n  $defs: {\n    create_company_benefits_response: {\n      type: 'object',\n      properties: {\n        benefit_id: {\n          type: 'string',\n          description: 'The id of the benefit.'\n        },\n        job_id: {\n          type: 'string'\n        }\n      },\n      required: [        'benefit_id',\n        'job_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entity_ids: {
        type: 'array',
        description: "The entity IDs to specify which entities' data to access.",
        items: {
          type: 'string',
        },
      },
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
              required: ['match', 'threshold'],
            },
          },
          type: {
            type: 'string',
            enum: ['match'],
          },
        },
        required: ['tiers', 'type'],
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['entity_ids'],
    $defs: {
      benefit_frequency: {
        type: 'string',
        title: 'BenefitFrequency',
        description: 'The frequency of the benefit deduction/contribution.',
        enum: ['every_paycheck', 'monthly', 'one_time'],
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
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.hris.benefits.create(body)));
};

export default { metadata, tool, handler };
