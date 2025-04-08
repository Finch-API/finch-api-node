// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.pay_statements',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_many_hris_pay_statements',
  description:
    'Read detailed pay statements for each individual.\n\nDeduction and contribution types are supported by the payroll systems that supports Benefits.',
  inputSchema: {
    type: 'object',
    properties: {
      requests: {
        type: 'array',
        description: 'The array of batch requests.',
        items: {
          type: 'object',
          properties: {
            payment_id: {
              type: 'string',
              description: 'A stable Finch `id` (UUID v4) for a payment.',
            },
            limit: {
              type: 'integer',
              description: 'Number of pay statements to return (defaults to all).',
            },
            offset: {
              type: 'integer',
              description: 'Index to start from.',
            },
          },
          required: ['payment_id'],
        },
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { ...body } = args;
  return client.hris.payStatements.retrieveMany(body);
};

export default { metadata, tool, handler };
