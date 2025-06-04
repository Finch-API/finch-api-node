// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
      },
      pay_statements: {
        type: 'array',
        items: {
          $ref: '#/$defs/pay_statement',
        },
      },
      start_date: {
        type: 'string',
      },
    },
    $defs: {
      pay_statement: {
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
                      required: ['metadata'],
                    },
                  },
                  required: ['metadata'],
                },
              },
              required: ['amount', 'currency', 'hours', 'name', 'type'],
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
                      required: ['metadata'],
                    },
                  },
                  required: ['metadata'],
                },
              },
              required: ['amount', 'currency', 'name', 'pre_tax', 'type'],
            },
          },
          employer_contributions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
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
                      required: ['metadata'],
                    },
                  },
                  required: ['metadata'],
                },
              },
              required: ['currency', 'name', 'type'],
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
            enum: ['check', 'direct_deposit', 'other'],
          },
          taxes: {
            type: 'array',
            description: 'The array of taxes objects associated with this pay statement.',
            items: {
              type: 'object',
              properties: {
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
                      required: ['metadata'],
                    },
                  },
                  required: ['metadata'],
                },
              },
              required: ['currency', 'employer', 'name', 'type'],
            },
          },
          total_hours: {
            type: 'number',
            description: 'The number of hours worked for this pay period',
          },
          type: {
            type: 'string',
            description: 'The type of the payment associated with the pay statement.',
            enum: ['off_cycle_payroll', 'one_time_payment', 'regular_payroll'],
          },
        },
        required: [
          'earnings',
          'employee_deductions',
          'employer_contributions',
          'gross_pay',
          'individual_id',
          'net_pay',
          'payment_method',
          'taxes',
          'total_hours',
          'type',
        ],
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
        required: ['amount', 'currency'],
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sandbox.payment.create(body);
};

export default { metadata, tool, handler };
