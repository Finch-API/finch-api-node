// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.individuals',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/employer/individual',
  operationId: 'get-individual',
};

export const tool: Tool = {
  name: 'retrieve_many_hris_individuals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead individual data, excluding income and employment data\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    responses: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/individual_response'\n      }\n    }\n  },\n  required: [    'responses'\n  ],\n  $defs: {\n    individual_response: {\n      type: 'object',\n      properties: {\n        body: {\n          $ref: '#/$defs/individual'\n        },\n        code: {\n          type: 'integer'\n        },\n        individual_id: {\n          type: 'string'\n        }\n      },\n      required: [        'body',\n        'code',\n        'individual_id'\n      ]\n    },\n    individual: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'A stable Finch `id` (UUID v4) for an individual in the company.'\n            },\n            dob: {\n              type: 'string',\n              title: 'Date'\n            },\n            ethnicity: {\n              type: 'string',\n              description: 'The EEOC-defined ethnicity of the individual.',\n              enum: [                'asian',\n                'white',\n                'black_or_african_american',\n                'native_hawaiian_or_pacific_islander',\n                'american_indian_or_alaska_native',\n                'hispanic_or_latino',\n                'two_or_more_races',\n                'decline_to_specify'\n              ]\n            },\n            first_name: {\n              type: 'string',\n              description: 'The legal first name of the individual.'\n            },\n            gender: {\n              type: 'string',\n              description: 'The gender of the individual.',\n              enum: [                'female',\n                'male',\n                'other',\n                'decline_to_specify'\n              ]\n            },\n            last_name: {\n              type: 'string',\n              description: 'The legal last name of the individual.'\n            },\n            middle_name: {\n              type: 'string',\n              description: 'The legal middle name of the individual.'\n            },\n            phone_numbers: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'string'\n                  },\n                  type: {\n                    type: 'string',\n                    enum: [                      'work',\n                      'personal'\n                    ]\n                  }\n                },\n                required: [                  'data',\n                  'type'\n                ]\n              }\n            },\n            preferred_name: {\n              type: 'string',\n              description: 'The preferred name of the individual.'\n            },\n            residence: {\n              $ref: '#/$defs/location'\n            },\n            emails: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'string'\n                  },\n                  type: {\n                    type: 'string',\n                    enum: [                      'work',\n                      'personal'\n                    ]\n                  }\n                },\n                required: [                  'data',\n                  'type'\n                ]\n              }\n            },\n            encrypted_ssn: {\n              type: 'string',\n              description: 'Social Security Number of the individual in **encrypted** format. This field is only available with the `ssn` scope enabled and the `options: { include: [\\'ssn\\'] }` param set in the body.'\n            },\n            ssn: {\n              type: 'string',\n              description: 'Social Security Number of the individual. This field is only available with the `ssn` scope enabled and the `options: { include: [\\'ssn\\'] }` param set in the body. [Click here to learn more about enabling the SSN field](/developer-resources/Enable-SSN-Field).'\n            }\n          },\n          required: [            'id',\n            'dob',\n            'ethnicity',\n            'first_name',\n            'gender',\n            'last_name',\n            'middle_name',\n            'phone_numbers',\n            'preferred_name',\n            'residence'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            code: {\n              type: 'number'\n            },\n            message: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            finch_code: {\n              type: 'string'\n            }\n          },\n          required: [            'code',\n            'message',\n            'name'\n          ]\n        }\n      ]\n    },\n    location: {\n      type: 'object',\n      title: 'Location',\n      properties: {\n        city: {\n          type: 'string',\n          description: 'City, district, suburb, town, or village.'\n        },\n        country: {\n          type: 'string',\n          description: 'The 2-letter ISO 3166 country code.'\n        },\n        line1: {\n          type: 'string',\n          description: 'Street address or PO box.'\n        },\n        line2: {\n          type: 'string',\n          description: 'Apartment, suite, unit, or building.'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'The postal code or zip code.'\n        },\n        state: {\n          type: 'string',\n          description: 'The state code.'\n        },\n        name: {\n          type: 'string'\n        },\n        source_id: {\n          type: 'string'\n        }\n      },\n      required: [        'city',\n        'country',\n        'line1',\n        'line2',\n        'postal_code',\n        'state'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      options: {
        type: 'object',
        properties: {
          include: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      requests: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            individual_id: {
              type: 'string',
            },
          },
          required: [],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.hris.individuals.retrieveMany(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
