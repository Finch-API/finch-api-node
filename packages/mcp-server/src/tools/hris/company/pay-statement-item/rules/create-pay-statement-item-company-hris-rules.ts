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
  name: 'create_pay_statement_item_company_hris_rules',
  description:
    '**Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon\nCustom rules can be created to associate specific attributes to pay statement items depending on the use case. For example, pay statement items that meet certain conditions can be labeled as a pre-tax 401k. This metadata can be retrieved where pay statement item information is available.\n',
  inputSchema: {
    type: 'object',
    properties: {
      attributes: {
        type: 'object',
        description: 'Specifies the fields to be applied when the condition is met.',
        properties: {
          metadata: {
            type: 'object',
            description:
              'The metadata to be attached in the entity. It is a key-value pairs where the values can be of any type (string, number, boolean, object, array, etc.).',
          },
        },
        required: [],
      },
      conditions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            field: {
              type: 'string',
              description: 'The field to be checked in the rule.',
            },
            operator: {
              type: 'string',
              description: 'The operator to be used in the rule.',
              enum: ['equals'],
            },
            value: {
              type: 'string',
              description: 'The value of the field to be checked in the rule.',
            },
          },
          required: [],
        },
      },
      effective_end_date: {
        type: 'string',
        title: 'Date',
        description: 'Specifies when the rules should stop applying rules based on the date.',
      },
      effective_start_date: {
        type: 'string',
        title: 'Date',
        description: 'Specifies when the rule should begin applying based on the date.',
      },
      entity_type: {
        type: 'string',
        description: 'The entity type to which the rule is applied.',
        enum: ['pay_statement_item'],
      },
    },
  },
};

export const handler = (client: Finch, args: any) => {
  const { ...body } = args;
  return client.hris.company.payStatementItem.rules.create(body);
};

export default { metadata, tool, handler };
