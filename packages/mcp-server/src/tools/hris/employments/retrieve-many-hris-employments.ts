// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.employments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/employer/employment',
  operationId: 'get-employment',
};

export const tool: Tool = {
  name: 'retrieve_many_hris_employments',
  description: 'Read individual employment and income data',
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
    required: ['entity_ids', 'requests'],
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.hris.employments.retrieveMany(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
