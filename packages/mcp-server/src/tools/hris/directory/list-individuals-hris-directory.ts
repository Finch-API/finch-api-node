// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.directory',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/directory',
  operationId: 'get-directory',
};

export const tool: Tool = {
  name: 'list_individuals_hris_directory',
  description: 'Read company directory and organization structure',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Number of employees to return (defaults to all)',
      },
      offset: {
        type: 'integer',
        description: 'Index to start from (defaults to 0)',
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.hris.directory.listIndividuals(body);
};

export default { metadata, tool, handler };
