// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.company',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sandbox/company',
  operationId: 'put-sandbox-company',
};

export const tool: Tool = {
  name: 'update_sandbox_company',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a sandbox company's data\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/company_update_response',\n  $defs: {\n    company_update_response: {\n      type: 'object',\n      properties: {\n        accounts: {\n          type: 'array',\n          description: 'An array of bank account objects associated with the payroll/HRIS system.',\n          items: {\n            type: 'object',\n            properties: {\n              account_name: {\n                type: 'string',\n                description: 'The name of the bank associated in the payroll/HRIS system.'\n              },\n              account_number: {\n                type: 'string',\n                description: '10-12 digit number to specify the bank account'\n              },\n              account_type: {\n                type: 'string',\n                description: 'The type of bank account.',\n                enum: [                  'checking',\n                  'savings'\n                ]\n              },\n              institution_name: {\n                type: 'string',\n                description: 'Name of the banking institution.'\n              },\n              routing_number: {\n                type: 'string',\n                description: 'A nine-digit code that\\'s based on the U.S. Bank location where your account was opened.'\n              }\n            }\n          }\n        },\n        departments: {\n          type: 'array',\n          description: 'The array of company departments.',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string',\n                description: 'The department name.'\n              },\n              parent: {\n                type: 'object',\n                description: 'The parent department, if present.',\n                properties: {\n                  name: {\n                    type: 'string',\n                    description: 'The parent department\\'s name.'\n                  }\n                }\n              }\n            }\n          }\n        },\n        ein: {\n          type: 'string',\n          description: 'The employer identification number.'\n        },\n        entity: {\n          type: 'object',\n          description: 'The entity type object.',\n          properties: {\n            subtype: {\n              type: 'string',\n              description: 'The tax payer subtype of the company.',\n              enum: [                's_corporation',\n                'c_corporation',\n                'b_corporation'\n              ]\n            },\n            type: {\n              type: 'string',\n              description: 'The tax payer type of the company.',\n              enum: [                'llc',\n                'lp',\n                'corporation',\n                'sole_proprietor',\n                'non_profit',\n                'partnership',\n                'cooperative'\n              ]\n            }\n          }\n        },\n        legal_name: {\n          type: 'string',\n          description: 'The legal name of the company.'\n        },\n        locations: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/location'\n          }\n        },\n        primary_email: {\n          type: 'string',\n          description: 'The email of the main administrator on the account.'\n        },\n        primary_phone_number: {\n          type: 'string',\n          description: 'The phone number of the main administrator on the account. Format: E.164, with extension where applicable, e.g. `+NNNNNNNNNNN xExtension`'\n        }\n      },\n      required: [        'accounts',\n        'departments',\n        'ein',\n        'entity',\n        'legal_name',\n        'locations',\n        'primary_email',\n        'primary_phone_number'\n      ]\n    },\n    location: {\n      type: 'object',\n      title: 'Location',\n      properties: {\n        city: {\n          type: 'string',\n          description: 'City, district, suburb, town, or village.'\n        },\n        country: {\n          type: 'string',\n          description: 'The 2-letter ISO 3166 country code.'\n        },\n        line1: {\n          type: 'string',\n          description: 'Street address or PO box.'\n        },\n        line2: {\n          type: 'string',\n          description: 'Apartment, suite, unit, or building.'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'The postal code or zip code.'\n        },\n        state: {\n          type: 'string',\n          description: 'The state code.'\n        },\n        name: {\n          type: 'string'\n        },\n        source_id: {\n          type: 'string'\n        }\n      },\n      required: [        'city',\n        'country',\n        'line1',\n        'line2',\n        'postal_code',\n        'state'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      accounts: {
        type: 'array',
        description: 'An array of bank account objects associated with the payroll/HRIS system.',
        items: {
          type: 'object',
          properties: {
            account_name: {
              type: 'string',
              description: 'The name of the bank associated in the payroll/HRIS system.',
            },
            account_number: {
              type: 'string',
              description: '10-12 digit number to specify the bank account',
            },
            account_type: {
              type: 'string',
              description: 'The type of bank account.',
              enum: ['checking', 'savings'],
            },
            institution_name: {
              type: 'string',
              description: 'Name of the banking institution.',
            },
            routing_number: {
              type: 'string',
              description:
                "A nine-digit code that's based on the U.S. Bank location where your account was opened.",
            },
          },
        },
      },
      departments: {
        type: 'array',
        description: 'The array of company departments.',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The department name.',
            },
            parent: {
              type: 'object',
              description: 'The parent department, if present.',
              properties: {
                name: {
                  type: 'string',
                  description: "The parent department's name.",
                },
              },
            },
          },
        },
      },
      ein: {
        type: 'string',
        description: 'The employer identification number.',
      },
      entity: {
        type: 'object',
        description: 'The entity type object.',
        properties: {
          subtype: {
            type: 'string',
            description: 'The tax payer subtype of the company.',
            enum: ['s_corporation', 'c_corporation', 'b_corporation'],
          },
          type: {
            type: 'string',
            description: 'The tax payer type of the company.',
            enum: ['llc', 'lp', 'corporation', 'sole_proprietor', 'non_profit', 'partnership', 'cooperative'],
          },
        },
      },
      legal_name: {
        type: 'string',
        description: 'The legal name of the company.',
      },
      locations: {
        type: 'array',
        items: {
          $ref: '#/$defs/location',
        },
      },
      primary_email: {
        type: 'string',
        description: 'The email of the main administrator on the account.',
      },
      primary_phone_number: {
        type: 'string',
        description:
          'The phone number of the main administrator on the account. Format: E.164, with extension where applicable, e.g. `+NNNNNNNNNNN xExtension`',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [
      'accounts',
      'departments',
      'ein',
      'entity',
      'legal_name',
      'locations',
      'primary_email',
      'primary_phone_number',
    ],
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.sandbox.company.update(body)));
};

export default { metadata, tool, handler };
