// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.individual',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sandbox/individual/{individual_id}',
  operationId: 'put-sandbox-individual-individual_id',
};

export const tool: Tool = {
  name: 'update_sandbox_individual',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate sandbox individual\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Individual',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'A stable Finch `id` (UUID v4) for an individual in the company.'\n    },\n    dob: {\n      type: 'string',\n      title: 'Date'\n    },\n    emails: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          data: {\n            type: 'string'\n          },\n          type: {\n            type: 'string',\n            enum: [              'work',\n              'personal'\n            ]\n          }\n        },\n        required: []\n      }\n    },\n    encrypted_ssn: {\n      type: 'string',\n      description: 'Social Security Number of the individual in **encrypted** format. This field is only available with the `ssn` scope enabled and the `options: { include: [\\'ssn\\'] }` param set in the body.'\n    },\n    ethnicity: {\n      type: 'string',\n      description: 'The EEOC-defined ethnicity of the individual.',\n      enum: [        'asian',\n        'white',\n        'black_or_african_american',\n        'native_hawaiian_or_pacific_islander',\n        'american_indian_or_alaska_native',\n        'hispanic_or_latino',\n        'two_or_more_races',\n        'decline_to_specify'\n      ]\n    },\n    first_name: {\n      type: 'string',\n      description: 'The legal first name of the individual.'\n    },\n    gender: {\n      type: 'string',\n      description: 'The gender of the individual.',\n      enum: [        'female',\n        'male',\n        'other',\n        'decline_to_specify'\n      ]\n    },\n    last_name: {\n      type: 'string',\n      description: 'The legal last name of the individual.'\n    },\n    middle_name: {\n      type: 'string',\n      description: 'The legal middle name of the individual.'\n    },\n    phone_numbers: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          data: {\n            type: 'string'\n          },\n          type: {\n            type: 'string',\n            enum: [              'work',\n              'personal'\n            ]\n          }\n        },\n        required: []\n      }\n    },\n    preferred_name: {\n      type: 'string',\n      description: 'The preferred name of the individual.'\n    },\n    residence: {\n      $ref: '#/$defs/location'\n    },\n    ssn: {\n      type: 'string',\n      description: 'Social Security Number of the individual. This field is only available with the `ssn` scope enabled and the `options: { include: [\\'ssn\\'] }` param set in the body. [Click here to learn more about enabling the SSN field](/developer-resources/Enable-SSN-Field).'\n    }\n  },\n  required: [],\n  $defs: {\n    location: {\n      type: 'object',\n      title: 'Location',\n      properties: {\n        city: {\n          type: 'string',\n          description: 'City, district, suburb, town, or village.'\n        },\n        country: {\n          type: 'string',\n          description: 'The 2-letter ISO 3166 country code.'\n        },\n        line1: {\n          type: 'string',\n          description: 'Street address or PO box.'\n        },\n        line2: {\n          type: 'string',\n          description: 'Apartment, suite, unit, or building.'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'The postal code or zip code.'\n        },\n        state: {\n          type: 'string',\n          description: 'The state code.'\n        },\n        name: {\n          type: 'string'\n        },\n        source_id: {\n          type: 'string'\n        }\n      },\n      required: [        'city',\n        'country',\n        'line1',\n        'line2',\n        'postal_code',\n        'state'\n      ]\n    }\n  }\n}\n```",
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
        $ref: '#/$defs/location',
      },
      ssn: {
        type: 'string',
        description:
          "Social Security Number of the individual. This field is only available with the `ssn` scope enabled and the `options: { include: ['ssn'] }` param set in the body. [Click here to learn more about enabling the SSN field](/developer-resources/Enable-SSN-Field).",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
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
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { individual_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.sandbox.individual.update(individual_id, body)),
  );
};

export default { metadata, tool, handler };
