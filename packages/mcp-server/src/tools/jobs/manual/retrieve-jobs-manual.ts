// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a manual job by `job_id`. Manual jobs are completed by a human and include Assisted Benefits jobs.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/manual_async_job',\n  $defs: {\n    manual_async_job: {\n      type: 'object',\n      title: 'ManualAsyncJob',\n      properties: {\n        body: {\n          type: 'array',\n          description: 'Specific information about the job, such as individual statuses for batch jobs.',\n          items: {\n            type: 'object'\n          }\n        },\n        job_id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'pending',\n            'in_progress',\n            'error',\n            'complete'\n          ]\n        }\n      },\n      required: [        'body',\n        'job_id',\n        'status'\n      ]\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { job_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.jobs.manual.retrieve(job_id)));
};

export default { metadata, tool, handler };
