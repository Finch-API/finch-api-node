// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.company.pay_statement_item',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_company_hris_pay_statement_item',
  description:
    "**Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon\n Retrieve a list of detailed pay statement items for the access token's connection account.\n",
  inputSchema: {
    type: 'object',
    properties: {
      categories: {
        type: 'array',
        description:
          'Comma-delimited list of pay statement item categories to filter on. If empty, defaults to all categories.',
        items: {
          type: 'string',
          enum: ['earnings', 'taxes', 'employee_deductions', 'employer_contributions'],
        },
      },
      end_date: {
        type: 'string',
        description:
          'The end date to retrieve pay statement items by via their last seen pay date in `YYYY-MM-DD` format.',
        format: 'date',
      },
      name: {
        type: 'string',
        description: 'Case-insensitive partial match search by pay statement item name.',
      },
      start_date: {
        type: 'string',
        description:
          'The start date to retrieve pay statement items by via their last seen pay date (inclusive) in `YYYY-MM-DD` format.',
        format: 'date',
      },
      type: {
        type: 'string',
        description: 'String search by pay statement item type.',
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.hris.company.payStatementItem.list(body);
};

export default { metadata, tool, handler };
