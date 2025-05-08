// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.payments',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_hris_payments',
  description: 'Read payroll and contractor related payments by the company.',
  inputSchema: {
    type: 'object',
    properties: {
      end_date: {
        type: 'string',
        description: 'The end date to retrieve payments by a company (inclusive) in `YYYY-MM-DD` format.',
        format: 'date',
      },
      start_date: {
        type: 'string',
        description: 'The start date to retrieve payments by a company (inclusive) in `YYYY-MM-DD` format.',
        format: 'date',
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.hris.payments.list(body);
};

export default { metadata, tool, handler };
