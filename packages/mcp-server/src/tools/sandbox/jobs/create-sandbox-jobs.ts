// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEnqueue a new sandbox job\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/job_create_response',\n  $defs: {\n    job_create_response: {\n      type: 'object',\n      properties: {\n        allowed_refreshes: {\n          type: 'integer',\n          description: 'The number of allowed refreshes per hour (per hour, fixed window)'\n        },\n        job_id: {\n          type: 'string',\n          description: 'The id of the job that has been created.'\n        },\n        job_url: {\n          type: 'string',\n          description: 'The url that can be used to retrieve the job status'\n        },\n        remaining_refreshes: {\n          type: 'integer',\n          description: 'The number of remaining refreshes available (per hour, fixed window)'\n        }\n      },\n      required: [        'allowed_refreshes',\n        'job_id',\n        'job_url',\n        'remaining_refreshes'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description: 'The type of job to start. Currently the only supported type is `data_sync_all`',
        enum: ['data_sync_all'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['type'],
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.sandbox.jobs.create(body)));
  } catch (error) {
    if (error instanceof Finch.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
