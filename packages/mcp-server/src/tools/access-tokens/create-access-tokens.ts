// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'access_tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/auth/token',
  operationId: 'create-access-token',
};

export const tool: Tool = {
  name: 'create_access_tokens',
  description: 'Exchange the authorization code for an access token',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
      },
      client_id: {
        type: 'string',
      },
      client_secret: {
        type: 'string',
      },
      redirect_uri: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.accessTokens.create(body);
};

export default { metadata, tool, handler };
