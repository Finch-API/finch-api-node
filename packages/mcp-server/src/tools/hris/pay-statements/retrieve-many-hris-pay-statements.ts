// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.pay_statements',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/employer/pay-statement',
  operationId: 'get-pay-statement',
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
    required: ['requests'],
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.hris.payStatements.retrieveMany(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
