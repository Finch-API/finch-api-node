// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.connections',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sandbox/connections',
  operationId: 'post-sandbox-connections',
};

export const tool: Tool = {
  name: 'create_sandbox_connections',
  description: 'Create a new connection (new company/provider pair) with a new account',
  inputSchema: {
    type: 'object',
    properties: {
      provider_id: {
        type: 'string',
        description: 'The provider associated with the connection',
      },
      authentication_type: {
        type: 'string',
        title: 'AuthenticationType',
        enum: ['credential', 'api_token', 'oauth', 'assisted'],
      },
      employee_size: {
        type: 'integer',
        description:
          'Optional: the size of the employer to be created with this connection. Defaults to 20. Note that if this is higher than 100, historical payroll data will not be generated, and instead only one pay period will be created.',
      },
      products: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sandbox.connections.create(body));
};

export default { metadata, tool, handler };
