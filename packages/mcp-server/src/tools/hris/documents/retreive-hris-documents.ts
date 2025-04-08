// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.documents',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retreive_hris_documents',
  description:
    '**Beta:** This endpoint is in beta and may change.\nRetrieve details of a specific document by its ID.\n',
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { document_id } = args;
  return client.hris.documents.retreive(document_id);
};

export default { metadata, tool, handler };
