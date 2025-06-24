// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.company.pay_statement_item.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/pay-statement-item/rule',
  operationId: 'get-rules',
};

export const tool: Tool = {
  name: 'list_pay_statement_item_company_hris_rules',
  description:
    '**Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon\nList all rules of a connection account.\n',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.hris.company.payStatementItem.rules.list());
};

export default { metadata, tool, handler };
