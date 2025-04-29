// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.payment',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_sandbox_payment',
  description: 'Add a new sandbox payment',
  inputSchema: {
    type: 'object',
    properties: {
      end_date: {
        type: 'string',
      },
      pay_statements: {
        type: 'array',
        items: {
          type: 'object',
          title: 'Pay Statement',
          properties: {
            earnings: {
              type: 'array',
              description: 'The array of earnings objects associated with this pay statement',
              items: {
                type: 'object',
                properties: {
                  amount: {
                    type: 'integer',
                    description: 'The earnings amount in cents.',
                  },
                  attributes: {
                    type: 'object',
                    properties: {
                      metadata: {
                        type: 'object',
                        properties: {
                          metadata: {
                            type: 'object',
                            description:
                              'The metadata to be attached to the entity by existing rules. It is a key-value pairs where the values can be of any type (string, number, boolean, object, array, etc.).',
                          },
                        },
                        required: [],
                      },
                    },
                    required: [],
                  },
                  currency: {
                    type: 'string',
                    description: 'The earnings currency code.',
                  },
                  hours: {
                    type: 'number',
                    description:
                      'The number of hours associated with this earning. (For salaried employees, this could be hours per pay period, `0` or `null`, depending on the provider).',
                  },
                  name: {
                    type: 'string',
                    description: 'The exact name of the deduction from the pay statement.',
                  },
                  type: {
                    type: 'string',
                    description: 'The type of earning.',
                    enum: [
                      'salary',
                      'wage',
                      'reimbursement',
                      'overtime',
                      'severance',
                      'double_overtime',
                      'pto',
                      'sick',
                      'bonus',
                      'commission',
                      'tips',
                      '1099',
                      'other',
                    ],
                  },
                },
                required: [],
              },
            },
            employee_deductions: {
              type: 'array',
              description: 'The array of deductions objects associated with this pay statement.',
              items: {
                type: 'object',
                properties: {
                  amount: {
                    type: 'integer',
                    description: 'The deduction amount in cents.',
                  },
                  attributes: {
                    type: 'object',
                    properties: {
                      metadata: {
                        type: 'object',
                        properties: {
                          metadata: {
                            type: 'object',
                            description:
                              'The metadata to be attached to the entity by existing rules. It is a key-value pairs where the values can be of any type (string, number, boolean, object, array, etc.).',
                          },
                        },
                        required: [],
                      },
                    },
                    required: [],
                  },
                  currency: {
                    type: 'string',
                    description: 'The deduction currency.',
                  },
                  name: {
                    type: 'string',
                    description: 'The deduction name from the pay statement.',
                  },
                  pre_tax: {
                    type: 'boolean',
                    description: 'Boolean indicating if the deduction is pre-tax.',
                  },
                  type: {
                    $ref: '#/$defs/benefit_type',
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
                    description: 'The contribution amount in cents.',
                  },
                  attributes: {
                    type: 'object',
                    properties: {
                      metadata: {
                        type: 'object',
                        properties: {
                          metadata: {
                            type: 'object',
                            description:
                              'The metadata to be attached to the entity by existing rules. It is a key-value pairs where the values can be of any type (string, number, boolean, object, array, etc.).',
                          },
                        },
                        required: [],
                      },
                    },
                    required: [],
                  },
                  currency: {
                    type: 'string',
                    description: 'The contribution currency.',
                  },
                  name: {
                    type: 'string',
                    description: 'The contribution name from the pay statement.',
                  },
                  type: {
                    $ref: '#/$defs/benefit_type',
                  },
                },
                required: [],
              },
            },
            gross_pay: {
              $ref: '#/$defs/money',
            },
            individual_id: {
              type: 'string',
              description: 'A stable Finch `id` (UUID v4) for an individual in the company',
            },
            net_pay: {
              $ref: '#/$defs/money',
            },
            payment_method: {
              type: 'string',
              description: 'The payment method.',
              enum: ['check', 'direct_deposit'],
            },
            taxes: {
              type: 'array',
              description: 'The array of taxes objects associated with this pay statement.',
              items: {
                type: 'object',
                properties: {
                  amount: {
                    type: 'integer',
                    description: 'The tax amount in cents.',
                  },
                  attributes: {
                    type: 'object',
                    properties: {
                      metadata: {
                        type: 'object',
                        properties: {
                          metadata: {
                            type: 'object',
                            description:
                              'The metadata to be attached to the entity by existing rules. It is a key-value pairs where the values can be of any type (string, number, boolean, object, array, etc.).',
                          },
                        },
                        required: [],
                      },
                    },
                    required: [],
                  },
                  currency: {
                    type: 'string',
                    description: 'The currency code.',
                  },
                  employer: {
                    type: 'boolean',
                    description: '`true` if the amount is paid by the employers.',
                  },
                  name: {
                    type: 'string',
                    description: 'The exact name of tax from the pay statement.',
                  },
                  type: {
                    type: 'string',
                    description: 'The type of taxes.',
                    enum: ['state', 'federal', 'local', 'fica'],
                  },
                },
                required: [],
              },
            },
            total_hours: {
              type: 'number',
              description: 'The number of hours worked for this pay period',
            },
            type: {
              type: 'string',
              description: 'The type of the payment associated with the pay statement.',
              enum: ['regular_payroll', 'off_cycle_payroll', 'one_time_payment'],
            },
          },
          required: [],
        },
      },
      start_date: {
        type: 'string',
      },
    },
    $defs: {
      benefit_type: {
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
      money: {
        type: 'object',
        title: 'Money',
        properties: {
          amount: {
            type: 'integer',
            description: 'Amount for money object (in cents)',
          },
          currency: {
            type: 'string',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sandbox.payment.create(body);
};

export default { metadata, tool, handler };
