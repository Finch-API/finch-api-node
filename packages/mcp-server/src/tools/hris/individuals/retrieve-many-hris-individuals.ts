// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.individuals',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_many_hris_individuals',
  description: 'Read individual data, excluding income and employment data',
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
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { ...body } = args;
  return client.hris.individuals.retrieveMany(body);
};

export default { metadata, tool, handler };
