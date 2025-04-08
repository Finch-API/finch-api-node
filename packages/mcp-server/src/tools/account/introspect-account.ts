// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'account',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'introspect_account',
  description: 'Read account information associated with an `access_token`',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Finch, args: any) => {
  const {} = args;
  return client.account.introspect();
};

export default { metadata, tool, handler };
