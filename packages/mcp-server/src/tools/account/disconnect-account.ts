// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'account',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/disconnect',
  operationId: 'post-disconnect',
};

export const tool: Tool = {
  name: 'disconnect_account',
  description: 'Disconnect one or more `access_token`s from your application.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  return client.account.disconnect();
};

export default { metadata, tool, handler };
