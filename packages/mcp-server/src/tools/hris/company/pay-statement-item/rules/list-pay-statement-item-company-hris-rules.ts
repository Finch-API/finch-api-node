// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.company.pay_statement_item.rules',
  operation: 'read',
  tags: [],
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

export const handler = (client: Finch, args: any) => {
  const {} = args;
  return client.hris.company.payStatementItem.rules.list();
};

export default { metadata, tool, handler };
