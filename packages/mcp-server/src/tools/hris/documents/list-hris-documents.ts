// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/documents',
  operationId: 'list-documents',
};

export const tool: Tool = {
  name: 'list_hris_documents',
  description:
    '**Beta:** This endpoint is in beta and may change.\nRetrieve a list of company-wide documents.\n',
  inputSchema: {
    type: 'object',
    properties: {
      individual_ids: {
        type: 'array',
        description:
          'Comma-delimited list of stable Finch uuids for each individual. If empty, defaults to all individuals',
        items: {
          type: 'string',
        },
      },
      limit: {
        type: 'integer',
        description: 'Number of documents to return (defaults to all)',
      },
      offset: {
        type: 'integer',
        description: 'Index to start from (defaults to 0)',
      },
      types: {
        type: 'array',
        description: 'Comma-delimited list of document types to filter on. If empty, defaults to all types',
        items: {
          type: 'string',
          enum: ['w4_2020', 'w4_2005'],
        },
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.hris.documents.list(body);
};

export default { metadata, tool, handler };
