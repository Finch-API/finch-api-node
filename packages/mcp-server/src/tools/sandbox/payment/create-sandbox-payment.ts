// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Add a new sandbox payment',
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
                required: [],
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
                required: [],
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
                required: [],
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
                required: [],
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
    },
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sandbox.payment.create(body));
};

export default { metadata, tool, handler };
