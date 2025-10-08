// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.jobs.configuration',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sandbox/jobs/configuration',
  operationId: 'get-sandbox-jobs-configuration',
};

export const tool: Tool = {
  name: 'retrieve_jobs_sandbox_configuration',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet configurations for sandbox jobs\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/configuration_retrieve_response',\n  $defs: {\n    configuration_retrieve_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/sandbox_job_configuration'\n      }\n    },\n    sandbox_job_configuration: {\n      type: 'object',\n      title: 'SandboxJobConfiguration',\n      properties: {\n        completion_status: {\n          type: 'string',\n          enum: [            'complete',\n            'reauth_error',\n            'permissions_error',\n            'error'\n          ]\n        },\n        type: {\n          type: 'string',\n          enum: [            'data_sync_all'\n          ]\n        }\n      },\n      required: [        'completion_status',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.sandbox.jobs.configuration.retrieve()),
  );
};

export default { metadata, tool, handler };
