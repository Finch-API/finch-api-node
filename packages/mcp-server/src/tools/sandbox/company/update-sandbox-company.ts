// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.company',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_sandbox_company',
  description: "Update a sandbox company's data",
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
          required: [],
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
              required: [],
            },
          },
          required: [],
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
        required: [],
      },
      legal_name: {
        type: 'string',
        description: 'The legal name of the company.',
      },
      locations: {
        type: 'array',
        items: {
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
      },
      primary_email: {
        type: 'string',
        description: 'The email of the main administrator on the account.',
      },
      primary_phone_number: {
        type: 'string',
        description: 'The phone number of the main administrator on the account. Format: `XXXXXXXXXX`',
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { ...body } = args;
  return client.sandbox.company.update(body);
};

export default { metadata, tool, handler };
