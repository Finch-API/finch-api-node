// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.jobs.configuration',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/sandbox/jobs/configuration',
  operationId: 'put-sandbox-jobs-configuration',
};

export const tool: Tool = {
  name: 'update_jobs_sandbox_configuration',
  description: 'Update configurations for sandbox jobs',
  inputSchema: {
    type: 'object',
    properties: {
      completion_status: {
        type: 'string',
        enum: ['complete', 'reauth_error', 'permissions_error', 'error'],
      },
      type: {
        type: 'string',
        enum: ['data_sync_all'],
      },
    },
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sandbox.jobs.configuration.update(body));
};

export default { metadata, tool, handler };
