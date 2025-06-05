// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'jobs.automated',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/jobs/automated',
  operationId: 'post-jobs-automated',
};

export const tool: Tool = {
  name: 'create_jobs_automated',
  description:
    'Enqueue an automated job.\n\n`data_sync_all`: Enqueue a job to re-sync all data for a connection. `data_sync_all` has a concurrency limit of 1 job at a time per connection. This means that if this endpoint is called while a job is already in progress for this connection, Finch will return the `job_id` of the job that is currently in progress. Finch allows a fixed window rate limit of 1 forced refresh per hour per connection.\n\n`w4_form_employee_sync`: Enqueues a job for sync W-4 data for a particular individual, identified by `individual_id`. This feature is currently in beta.\n\nThis endpoint is available for *Scale* tier customers as an add-on. To request access to this endpoint, please contact your Finch account manager.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description: 'The type of job to start.',
            enum: ['data_sync_all'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          params: {
            type: 'object',
            properties: {
              individual_id: {
                type: 'string',
                description: 'The unique ID of the individual for W-4 data sync.',
              },
            },
            required: ['individual_id'],
          },
          type: {
            type: 'string',
            description: 'The type of job to start.',
            enum: ['w4_form_employee_sync'],
          },
        },
      },
    ],
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.jobs.automated.create(body));
};

export default { metadata, tool, handler };
