// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.payment',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sandbox/payment',
  operationId: 'post-sandbox-payment',
};

export const tool: Tool = {
  name: 'create_sandbox_payment',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a new sandbox payment\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    pay_date: {\n      type: 'string',\n      description: 'The date of the payment.'\n    },\n    payment_id: {\n      type: 'string',\n      description: 'The ID of the payment.'\n    }\n  },\n  required: [    'pay_date',\n    'payment_id'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      end_date: {
        type: 'string',
        format: 'date',
      },
      pay_statements: {
        type: 'array',
        description: 'Array of pay statements to include in the payment.',
        items: {
          type: 'object',
          properties: {
            individual_id: {
              type: 'string',
            },
            earnings: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  amount: {
                    type: 'integer',
                  },
                  hours: {
                    type: 'number',
                  },
                  name: {
                    type: 'string',
                  },
                  type: {
                    type: 'string',
                    enum: [
                      'bonus',
                      'commission',
                      'double_overtime',
                      'other',
                      'overtime',
                      'pto',
                      'reimbursement',
                      'salary',
                      'severance',
                      'sick',
                      'tips',
                      'wage',
                      '1099',
                    ],
                  },
                },
              },
            },
            employee_deductions: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  amount: {
                    type: 'integer',
                  },
                  name: {
                    type: 'string',
                  },
                  pre_tax: {
                    type: 'boolean',
                  },
                  type: {
                    type: 'string',
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
            },
            employer_contributions: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  amount: {
                    type: 'integer',
                  },
                  name: {
                    type: 'string',
                  },
                  type: {
                    type: 'string',
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
            },
            gross_pay: {
              type: 'integer',
            },
            net_pay: {
              type: 'integer',
            },
            payment_method: {
              type: 'string',
              enum: ['check', 'direct_deposit', 'other'],
            },
            taxes: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  amount: {
                    type: 'integer',
                  },
                  employer: {
                    type: 'boolean',
                  },
                  name: {
                    type: 'string',
                  },
                  type: {
                    type: 'string',
                    enum: ['federal', 'fica', 'local', 'state'],
                  },
                },
              },
            },
            total_hours: {
              type: 'number',
            },
            type: {
              type: 'string',
              enum: ['off_cycle_payroll', 'one_time_payment', 'regular_payroll'],
            },
          },
          required: ['individual_id'],
        },
      },
      start_date: {
        type: 'string',
        format: 'date',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.sandbox.payment.create(body)));
};

export default { metadata, tool, handler };
