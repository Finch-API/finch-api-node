// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.hris.individuals.retrieveMany(body));
};

export default { metadata, tool, handler };
