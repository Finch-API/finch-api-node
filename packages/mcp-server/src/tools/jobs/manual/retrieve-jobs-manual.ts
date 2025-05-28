// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'jobs.manual',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/jobs/manual/{job_id}',
  operationId: 'get-jobs-manual-job_id',
};

export const tool: Tool = {
  name: 'retrieve_jobs_manual',
  description:
    'Get a manual job by `job_id`. Manual jobs are completed by a human and include Assisted Benefits jobs.',
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
  return client.jobs.manual.retrieve(job_id);
};

export default { metadata, tool, handler };
