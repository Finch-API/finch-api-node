// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'jobs.automated',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/jobs/automated/{job_id}',
  operationId: 'get-jobs-job_id',
};

export const tool: Tool = {
  name: 'retrieve_jobs_automated',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet an automated job by `job_id`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/automated_async_job',\n  $defs: {\n    automated_async_job: {\n      type: 'object',\n      title: 'AutomatedAsyncJob',\n      properties: {\n        completed_at: {\n          type: 'string',\n          description: 'The datetime the job completed.',\n          format: 'date-time'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The datetime when the job was created. for scheduled jobs, this will be the initial connection time. For ad-hoc jobs, this will be the time the creation request was received.',\n          format: 'date-time'\n        },\n        job_id: {\n          type: 'string',\n          description: 'The id of the job that has been created.'\n        },\n        job_url: {\n          type: 'string',\n          description: 'The url that can be used to retrieve the job status'\n        },\n        params: {\n          type: 'object',\n          description: 'The input parameters for the job.',\n          properties: {\n            individual_id: {\n              type: 'string',\n              description: 'The ID of the individual that the job was completed for.'\n            }\n          }\n        },\n        scheduled_at: {\n          type: 'string',\n          description: 'The datetime a job is scheduled to be run. For scheduled jobs, this datetime can be in the future if the job has not yet been enqueued. For ad-hoc jobs, this field will be null.',\n          format: 'date-time'\n        },\n        started_at: {\n          type: 'string',\n          description: 'The datetime a job entered into the job queue.',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          enum: [            'pending',\n            'in_progress',\n            'complete',\n            'error',\n            'reauth_error',\n            'permissions_error'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'The type of automated job',\n          enum: [            'data_sync_all',\n            'w4_form_employee_sync'\n          ]\n        }\n      },\n      required: [        'completed_at',\n        'created_at',\n        'job_id',\n        'job_url',\n        'params',\n        'scheduled_at',\n        'started_at',\n        'status',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['job_id'],
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { job_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.jobs.automated.retrieve(job_id)));
};

export default { metadata, tool, handler };
