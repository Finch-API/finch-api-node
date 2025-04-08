// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'payroll.pay_groups',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_payroll_pay_groups',
  description: 'Read information from a single pay group',
  inputSchema: {
    type: 'object',
    properties: {
      pay_group_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { pay_group_id } = args;
  return client.payroll.payGroups.retrieve(pay_group_id);
};

export default { metadata, tool, handler };
