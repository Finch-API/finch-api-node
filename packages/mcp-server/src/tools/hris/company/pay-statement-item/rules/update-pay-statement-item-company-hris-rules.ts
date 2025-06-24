// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.company.pay_statement_item.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/employer/pay-statement-item/rule/{rule_id}',
  operationId: 'update-rule',
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

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await client.hris.company.payStatementItem.rules.update(rule_id, body));
};

export default { metadata, tool, handler };
