// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'sandbox.connections.accounts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_connections_sandbox_accounts',
  description:
    'Update an existing sandbox account. Change the connection status to understand how the Finch API responds.',
  inputSchema: {
    type: 'object',
    properties: {
      connection_status: {
        $ref: '#/$defs/connection_status_type',
      },
    },
    $defs: {
      connection_status_type: {
        type: 'string',
        title: 'ConnectionStatus',
        enum: ['pending', 'processing', 'connected', 'error_no_account_setup', 'error_permissions', 'reauth'],
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sandbox.connections.accounts.update(body);
};

export default { metadata, tool, handler };
