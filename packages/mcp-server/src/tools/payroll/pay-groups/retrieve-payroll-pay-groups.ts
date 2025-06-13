// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'payroll.pay_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/pay-groups/{pay_group_id}',
  operationId: 'get-pay-group',
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

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { pay_group_id, ...body } = args as any;
  return asTextContentResult(await client.payroll.payGroups.retrieve(pay_group_id));
};

export default { metadata, tool, handler };
