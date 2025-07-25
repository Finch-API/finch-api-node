// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/benefits/{benefit_id}',
  operationId: 'get-company-benefit',
};

export const tool: Tool = {
  name: 'retrieve_hris_benefits',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists deductions and contributions information for a given item\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/company_benefit',\n  $defs: {\n    company_benefit: {\n      type: 'object',\n      title: 'CompanyBenefit',\n      properties: {\n        benefit_id: {\n          type: 'string',\n          description: 'The id of the benefit.'\n        },\n        description: {\n          type: 'string'\n        },\n        frequency: {\n          $ref: '#/$defs/benefit_frequency'\n        },\n        type: {\n          $ref: '#/$defs/benefit_type'\n        },\n        company_contribution: {\n          type: 'object',\n          title: 'BenefitCompanyMatchContribution',\n          description: 'The company match for this benefit.',\n          properties: {\n            tiers: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  match: {\n                    type: 'integer'\n                  },\n                  threshold: {\n                    type: 'integer'\n                  }\n                },\n                required: [                  'match',\n                  'threshold'\n                ]\n              }\n            },\n            type: {\n              type: 'string',\n              enum: [                'match'\n              ]\n            }\n          },\n          required: [            'tiers',\n            'type'\n          ]\n        }\n      },\n      required: [        'benefit_id',\n        'description',\n        'frequency',\n        'type'\n      ]\n    },\n    benefit_frequency: {\n      type: 'string',\n      title: 'BenefitFrequency',\n      description: 'The frequency of the benefit deduction/contribution.',\n      enum: [        'every_paycheck',\n        'monthly',\n        'one_time'\n      ]\n    },\n    benefit_type: {\n      type: 'string',\n      title: 'BenefitType',\n      description: 'Type of benefit.',\n      enum: [        '457',\n        '401k',\n        '401k_roth',\n        '401k_loan',\n        '403b',\n        '403b_roth',\n        '457_roth',\n        'commuter',\n        'custom_post_tax',\n        'custom_pre_tax',\n        'fsa_dependent_care',\n        'fsa_medical',\n        'hsa_post',\n        'hsa_pre',\n        's125_dental',\n        's125_medical',\n        's125_vision',\n        'simple',\n        'simple_ira'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      benefit_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['benefit_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { benefit_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.hris.benefits.retrieve(benefit_id)));
};

export default { metadata, tool, handler };
