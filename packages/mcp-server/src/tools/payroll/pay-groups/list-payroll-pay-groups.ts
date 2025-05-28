// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'payroll.pay_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/pay-groups',
  operationId: 'get-all-pay-groups',
};

export const tool: Tool = {
  name: 'list_payroll_pay_groups',
  description: 'Read company pay groups and frequencies',
  inputSchema: {
    type: 'object',
    properties: {
      individual_id: {
        type: 'string',
      },
      pay_frequencies: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.payroll.payGroups.list(body);
};

export default { metadata, tool, handler };
