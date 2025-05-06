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
  name: 'create_connections_sandbox_accounts',
  description: 'Create a new account for an existing connection (company/provider pair)',
  inputSchema: {
    type: 'object',
    properties: {
      company_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
        description: 'The provider associated with the `access_token`',
      },
      authentication_type: {
        type: 'string',
        title: 'AuthenticationType',
        enum: ['credential', 'api_token', 'oauth', 'assisted'],
      },
      products: {
        type: 'array',
        description:
          'Optional, defaults to Organization products (`company`, `directory`, `employment`, `individual`)',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sandbox.connections.accounts.create(body);
};

export default { metadata, tool, handler };
