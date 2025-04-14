// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.directory',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_sandbox_directory',
  description: 'Add new individuals to a sandbox company',
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'array',
        description:
          'Array of individuals to create. Takes all combined fields from `/individual` and `/employment` endpoints. All fields are optional.',
        items: {
          type: 'object',
          properties: {
            class_code: {
              type: 'string',
              description: "Worker's compensation classification code for this employee",
            },
            custom_fields: {
              type: 'array',
              description:
                'Custom fields for the individual. These are fields which are defined by the employer in the system. Custom fields are not currently supported for assisted connections.',
              items: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                  },
                  value: {
                    type: 'object',
                  },
                },
                required: [],
              },
            },
            department: {
              type: 'object',
              description: 'The department object.',
              properties: {
                name: {
                  type: 'string',
                  description: 'The name of the department associated with the individual.',
                },
              },
              required: [],
            },
            dob: {
              type: 'string',
              title: 'Date',
            },
            emails: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  data: {
                    type: 'string',
                  },
                  type: {
                    type: 'string',
                    enum: ['work', 'personal'],
                  },
                },
                required: [],
              },
            },
            employment: {
              type: 'object',
              description: 'The employment object.',
              properties: {
                subtype: {
                  type: 'string',
                  description:
                    '\tThe secondary employment type of the individual. Options: `full_time`, `part_time`, `intern`, `temp`, `seasonal` and `individual_contractor`.',
                  enum: ['full_time', 'intern', 'part_time', 'temp', 'seasonal', 'individual_contractor'],
                },
                type: {
                  type: 'string',
                  description: 'The main employment type of the individual.',
                  enum: ['employee', 'contractor'],
                },
              },
              required: [],
            },
            employment_status: {
              type: 'string',
              description: 'The detailed employment status of the individual.',
              enum: ['active', 'deceased', 'leave', 'onboarding', 'prehire', 'retired', 'terminated'],
            },
            encrypted_ssn: {
              type: 'string',
              description:
                "Social Security Number of the individual in **encrypted** format. This field is only available with the `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the body.",
            },
            end_date: {
              type: 'string',
              title: 'Date',
            },
            ethnicity: {
              type: 'string',
              description: 'The EEOC-defined ethnicity of the individual.',
              enum: [
                'asian',
                'white',
                'black_or_african_american',
                'native_hawaiian_or_pacific_islander',
                'american_indian_or_alaska_native',
                'hispanic_or_latino',
                'two_or_more_races',
                'decline_to_specify',
              ],
            },
            first_name: {
              type: 'string',
              description: 'The legal first name of the individual.',
            },
            gender: {
              type: 'string',
              description: 'The gender of the individual.',
              enum: ['female', 'male', 'other', 'decline_to_specify'],
            },
            income: {
              type: 'object',
              title: 'Income',
              description:
                "The employee's income as reported by the provider. This may not always be annualized income, but may be in units of bi-weekly, semi-monthly, daily, etc, depending on what information the provider returns.",
              properties: {
                amount: {
                  type: 'integer',
                  description: 'The income amount in cents.',
                },
                currency: {
                  type: 'string',
                  description: 'The currency code.',
                },
                effective_date: {
                  type: 'string',
                  description: 'The date the income amount went into effect.',
                },
                unit: {
                  type: 'string',
                  description:
                    'The income unit of payment. Options: `yearly`, `quarterly`, `monthly`, `semi_monthly`, `bi_weekly`, `weekly`, `daily`, `hourly`, and `fixed`.',
                  enum: [
                    'yearly',
                    'quarterly',
                    'monthly',
                    'semi_monthly',
                    'bi_weekly',
                    'weekly',
                    'daily',
                    'hourly',
                    'fixed',
                  ],
                },
              },
              required: [],
            },
            income_history: {
              type: 'array',
              description: 'The array of income history.',
              items: {
                $ref: '#/properties/body/items/income',
              },
            },
            is_active: {
              type: 'boolean',
              description: '`true` if the individual an an active employee or contractor at the company.',
            },
            last_name: {
              type: 'string',
              description: 'The legal last name of the individual.',
            },
            latest_rehire_date: {
              type: 'string',
              title: 'Date',
            },
            location: {
              type: 'object',
              title: 'Location',
              properties: {
                city: {
                  type: 'string',
                  description: 'City, district, suburb, town, or village.',
                },
                country: {
                  type: 'string',
                  description: 'The 2-letter ISO 3166 country code.',
                },
                line1: {
                  type: 'string',
                  description: 'Street address or PO box.',
                },
                line2: {
                  type: 'string',
                  description: 'Apartment, suite, unit, or building.',
                },
                name: {
                  type: 'string',
                },
                postal_code: {
                  type: 'string',
                  description: 'The postal code or zip code.',
                },
                source_id: {
                  type: 'string',
                },
                state: {
                  type: 'string',
                  description: 'The state code.',
                },
              },
              required: [],
            },
            manager: {
              type: 'object',
              description: 'The manager object representing the manager of the individual within the org.',
              properties: {
                id: {
                  type: 'string',
                  description: 'A stable Finch `id` (UUID v4) for an individual in the company.',
                },
              },
              required: [],
            },
            middle_name: {
              type: 'string',
              description: 'The legal middle name of the individual.',
            },
            phone_numbers: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  data: {
                    type: 'string',
                  },
                  type: {
                    type: 'string',
                    enum: ['work', 'personal'],
                  },
                },
                required: [],
              },
            },
            preferred_name: {
              type: 'string',
              description: 'The preferred name of the individual.',
            },
            residence: {
              $ref: '#/properties/body/items/location',
            },
            source_id: {
              type: 'string',
              description: "The source system's unique employment identifier for this individual",
            },
            ssn: {
              type: 'string',
              description:
                "Social Security Number of the individual. This field is only available with the `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the body. [Click here to learn more about enabling the SSN field](/developer-resources/Enable-SSN-Field).",
            },
            start_date: {
              type: 'string',
              title: 'Date',
            },
            title: {
              type: 'string',
              description: 'The current title of the individual.',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { ...body } = args;
  return client.sandbox.directory.create(body['body']);
};

export default { metadata, tool, handler };
