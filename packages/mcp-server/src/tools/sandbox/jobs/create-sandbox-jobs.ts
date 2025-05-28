// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sandbox/jobs',
  operationId: 'post-sandbox-job',
};

export const tool: Tool = {
  name: 'create_sandbox_jobs',
  description: 'Enqueue a new sandbox job',
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description: 'The type of job to start. Currently the only supported type is `data_sync_all`',
        enum: ['data_sync_all'],
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sandbox.jobs.create(body);
};

export default { metadata, tool, handler };
