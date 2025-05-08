// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.company.pay_statement_item.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_pay_statement_item_company_hris_rules',
  description:
    '**Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon\nUpdate a rule for a pay statement item.\n',
  inputSchema: {
    type: 'object',
    properties: {
      rule_id: {
        type: 'string',
      },
      optionalProperty: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return client.hris.company.payStatementItem.rules.update(rule_id, body);
};

export default { metadata, tool, handler };
