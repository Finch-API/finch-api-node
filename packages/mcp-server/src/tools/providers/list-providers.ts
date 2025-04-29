// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'providers',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_providers',
  description: 'Return details on all available payroll and HR systems.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  return client.providers.list();
};

export default { metadata, tool, handler };
