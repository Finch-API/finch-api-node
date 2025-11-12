// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.company',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/company',
  operationId: 'get-company',
};

export const tool: Tool = {
  name: 'retrieve_hris_company',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead basic company data\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/company',\n  $defs: {\n    company: {\n      type: 'object',\n      title: 'GetCompany',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A stable Finch `id` (UUID v4) for the company.'\n        },\n        accounts: {\n          type: 'array',\n          description: 'An array of bank account objects associated with the payroll/HRIS system.',\n          items: {\n            type: 'object',\n            properties: {\n              account_name: {\n                type: 'string',\n                description: 'The name of the bank associated in the payroll/HRIS system.'\n              },\n              account_number: {\n                type: 'string',\n                description: '10-12 digit number to specify the bank account'\n              },\n              account_type: {\n                type: 'string',\n                description: 'The type of bank account.',\n                enum: [                  'checking',\n                  'savings'\n                ]\n              },\n              institution_name: {\n                type: 'string',\n                description: 'Name of the banking institution.'\n              },\n              routing_number: {\n                type: 'string',\n                description: 'A nine-digit code that\\'s based on the U.S. Bank location where your account was opened.'\n              }\n            },\n            required: [              'account_name',\n              'account_number',\n              'account_type',\n              'institution_name',\n              'routing_number'\n            ]\n          }\n        },\n        departments: {\n          type: 'array',\n          description: 'The array of company departments.',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string',\n                description: 'The department name.'\n              },\n              parent: {\n                type: 'object',\n                description: 'The parent department, if present.',\n                properties: {\n                  name: {\n                    type: 'string',\n                    description: 'The parent department\\'s name.'\n                  }\n                },\n                required: [                  'name'\n                ]\n              }\n            },\n            required: [              'name',\n              'parent'\n            ]\n          }\n        },\n        ein: {\n          type: 'string',\n          description: 'The employer identification number.'\n        },\n        entity: {\n          type: 'object',\n          description: 'The entity type object.',\n          properties: {\n            subtype: {\n              type: 'string',\n              description: 'The tax payer subtype of the company.',\n              enum: [                's_corporation',\n                'c_corporation',\n                'b_corporation'\n              ]\n            },\n            type: {\n              type: 'string',\n              description: 'The tax payer type of the company.',\n              enum: [                'llc',\n                'lp',\n                'corporation',\n                'sole_proprietor',\n                'non_profit',\n                'partnership',\n                'cooperative'\n              ]\n            }\n          },\n          required: [            'subtype',\n            'type'\n          ]\n        },\n        legal_name: {\n          type: 'string',\n          description: 'The legal name of the company.'\n        },\n        locations: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/location'\n          }\n        },\n        primary_email: {\n          type: 'string',\n          description: 'The email of the main administrator on the account.'\n        },\n        primary_phone_number: {\n          type: 'string',\n          description: 'The phone number of the main administrator on the account. Format: E.164, with extension where applicable, e.g. `+NNNNNNNNNNN xExtension`'\n        }\n      },\n      required: [        'id',\n        'accounts',\n        'departments',\n        'ein',\n        'entity',\n        'legal_name',\n        'locations',\n        'primary_email',\n        'primary_phone_number'\n      ]\n    },\n    location: {\n      type: 'object',\n      title: 'Location',\n      properties: {\n        city: {\n          type: 'string',\n          description: 'City, district, suburb, town, or village.'\n        },\n        country: {\n          type: 'string',\n          description: 'The 2-letter ISO 3166 country code.'\n        },\n        line1: {\n          type: 'string',\n          description: 'Street address or PO box.'\n        },\n        line2: {\n          type: 'string',\n          description: 'Apartment, suite, unit, or building.'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'The postal code or zip code.'\n        },\n        state: {\n          type: 'string',\n          description: 'The state code.'\n        },\n        name: {\n          type: 'string'\n        },\n        source_id: {\n          type: 'string'\n        }\n      },\n      required: [        'city',\n        'country',\n        'line1',\n        'line2',\n        'postal_code',\n        'state'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entity_ids: {
        type: 'array',
        description: "The entity IDs to specify which entities' data to access.",
        items: {
          type: 'string',
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
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.hris.company.retrieve(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
