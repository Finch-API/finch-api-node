// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'connect.sessions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'reauthenticate_connect_sessions',
  description: 'Create a new Connect session for reauthenticating an existing connection',
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
        description: 'The ID of the existing connection to reauthenticate',
      },
      minutes_to_expire: {
        type: 'integer',
        description: 'The number of minutes until the session expires (defaults to 43,200, which is 30 days)',
      },
      products: {
        type: 'array',
        description: 'The products to request access to (optional for reauthentication)',
        items: {
          type: 'string',
          description: 'The Finch products that can be requested during the Connect flow.',
          enum: [
            'company',
            'directory',
            'individual',
            'employment',
            'payment',
            'pay_statement',
            'benefits',
            'ssn',
            'deduction',
            'documents',
          ],
        },
      },
      redirect_uri: {
        type: 'string',
        description: 'The URI to redirect to after the Connect flow is completed',
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.connect.sessions.reauthenticate(body);
};

export default { metadata, tool, handler };
