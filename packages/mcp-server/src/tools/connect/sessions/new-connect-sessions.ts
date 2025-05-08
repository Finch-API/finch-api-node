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
  name: 'new_connect_sessions',
  description: 'Create a new connect session for an employer',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      customer_name: {
        type: 'string',
      },
      products: {
        type: 'array',
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
      customer_email: {
        type: 'string',
      },
      integration: {
        type: 'object',
        properties: {
          auth_method: {
            type: 'string',
            enum: ['assisted', 'credential', 'oauth', 'api_token'],
          },
          provider: {
            type: 'string',
          },
        },
        required: [],
      },
      manual: {
        type: 'boolean',
      },
      minutes_to_expire: {
        type: 'number',
        description: 'The number of minutes until the session expires (defaults to 43,200, which is 30 days)',
      },
      redirect_uri: {
        type: 'string',
      },
      sandbox: {
        type: 'string',
        enum: ['finch', 'provider'],
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.connect.sessions.new(body);
};

export default { metadata, tool, handler };
