// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEnqueue an automated job.\n\n`data_sync_all`: Enqueue a job to re-sync all data for a connection. `data_sync_all` has a concurrency limit of 1 job at a time per connection. This means that if this endpoint is called while a job is already in progress for this connection, Finch will return the `job_id` of the job that is currently in progress. Finch allows a fixed window rate limit of 1 forced refresh per hour per connection.\n\n`w4_form_employee_sync`: Enqueues a job for sync W-4 data for a particular individual, identified by `individual_id`. This feature is currently in beta.\n\nThis endpoint is available for *Scale* tier customers as an add-on. To request access to this endpoint, please contact your Finch account manager.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    allowed_refreshes: {\n      type: 'integer',\n      description: 'The number of allowed refreshes per hour (per hour, fixed window)'\n    },\n    remaining_refreshes: {\n      type: 'integer',\n      description: 'The number of remaining refreshes available (per hour, fixed window)'\n    },\n    job_id: {\n      type: 'string',\n      description: 'The id of the job that has been created.'\n    },\n    job_url: {\n      type: 'string',\n      description: 'The url that can be used to retrieve the job status'\n    },\n    retry_at: {\n      type: 'string',\n      description: 'ISO 8601 timestamp indicating when to retry the request'\n    }\n  },\n  required: [    'allowed_refreshes',\n    'remaining_refreshes'\n  ]\n}\n```",
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
        required: ['type'],
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
        required: ['params', 'type'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.jobs.automated.create(body)));
};

export default { metadata, tool, handler };
