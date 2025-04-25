// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.individual',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_sandbox_individual',
  description: 'Update sandbox individual',
  inputSchema: {
    type: 'object',
    properties: {
      individual_id: {
        type: 'string',
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
      encrypted_ssn: {
        type: 'string',
        description:
          "Social Security Number of the individual in **encrypted** format. This field is only available with the `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the body.",
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
      last_name: {
        type: 'string',
        description: 'The legal last name of the individual.',
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
      ssn: {
        type: 'string',
        description:
          "Social Security Number of the individual. This field is only available with the `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the body. [Click here to learn more about enabling the SSN field](/developer-resources/Enable-SSN-Field).",
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { individual_id, ...body } = args;
  return client.sandbox.individual.update(individual_id, body);
};

export default { metadata, tool, handler };
