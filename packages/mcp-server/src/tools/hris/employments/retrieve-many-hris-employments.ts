// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.employments',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_many_hris_employments',
  description: 'Read individual employment and income data',
  inputSchema: {
    type: 'object',
    properties: {
      requests: {
        type: 'array',
        description: 'The array of batch requests.',
        items: {
          type: 'object',
          properties: {
            individual_id: {
              type: 'string',
              description:
                'A stable Finch `id` (UUID v4) for an individual in the company. There is no limit to the number of `individual_id` to send per request. It is preferantial to send all ids in a single request for Finch to optimize provider rate-limits.',
            },
          },
          required: ['individual_id'],
        },
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { ...body } = args;
  return client.hris.employments.retrieveMany(body);
};

export default { metadata, tool, handler };
