// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.directory',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sandbox/directory',
  operationId: 'post-sandbox-directory',
};

export const tool: Tool = {
  name: 'create_sandbox_directory',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd new individuals to a sandbox company\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/directory_create_response',\n  $defs: {\n    directory_create_response: {\n      type: 'array',\n      description: 'The individuals which were created',\n      items: {\n        type: 'object',\n        additionalProperties: true\n      }\n    }\n  }\n}\n```",
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
                    additionalProperties: true,
                  },
                },
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
              },
            },
            employment: {
              type: 'object',
              description: 'The employment object.',
              properties: {
                subtype: {
                  type: 'string',
                  description:
                    'The secondary employment type of the individual. Options: `full_time`, `part_time`, `intern`, `temp`, `seasonal` and `individual_contractor`.',
                  enum: ['full_time', 'intern', 'part_time', 'temp', 'seasonal', 'individual_contractor'],
                },
                type: {
                  type: 'string',
                  description: 'The main employment type of the individual.',
                  enum: ['employee', 'contractor'],
                },
              },
            },
            employment_status: {
              type: 'string',
              description:
                'The detailed employment status of the individual. Available options: `active`, `deceased`, `leave`, `onboarding`, `prehire`, `retired`, `terminated`.',
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
              $ref: '#/$defs/income',
            },
            income_history: {
              type: 'array',
              description: 'The array of income history.',
              items: {
                $ref: '#/$defs/income',
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
              $ref: '#/$defs/location',
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
              },
            },
            preferred_name: {
              type: 'string',
              description: 'The preferred name of the individual.',
            },
            residence: {
              $ref: '#/$defs/location',
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
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
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
            format: 'date',
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
        required: ['amount', 'currency', 'effective_date', 'unit'],
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
          postal_code: {
            type: 'string',
            description: 'The postal code or zip code.',
          },
          state: {
            type: 'string',
            description: 'The state code.',
          },
          name: {
            type: 'string',
          },
          source_id: {
            type: 'string',
          },
        },
        required: ['city', 'country', 'line1', 'line2', 'postal_code', 'state'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.sandbox.directory.create(body)));
  } catch (error) {
    if (error instanceof Finch.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
