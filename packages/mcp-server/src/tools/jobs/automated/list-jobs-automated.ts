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
  name: 'list_jobs_automated',
  description:
    'Get all automated jobs. Automated jobs are completed by a machine. By default, jobs are sorted in descending order by submission time. For scheduled jobs such as data syncs, only the next scheduled job is shown.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Number of items to return',
      },
      offset: {
        type: 'integer',
        description: 'Index to start from (defaults to 0)',
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { ...body } = args;
  return client.jobs.automated.list(body);
};

export default { metadata, tool, handler };
