// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
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
  description: 'Get configurations for sandbox jobs',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.sandbox.jobs.configuration.retrieve());
};

export default { metadata, tool, handler };
