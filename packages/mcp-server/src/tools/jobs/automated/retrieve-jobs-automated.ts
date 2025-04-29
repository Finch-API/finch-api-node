// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'jobs.automated',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_jobs_automated',
  description: 'Get an automated job by `job_id`.',
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const { job_id, ...body } = args as any;
  return client.jobs.automated.retrieve(job_id);
};

export default { metadata, tool, handler };
