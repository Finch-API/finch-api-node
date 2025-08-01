// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.company.pay_statement_item.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/employer/pay-statement-item/rule',
  operationId: 'create-rule',
};

export const tool: Tool = {
  name: 'create_pay_statement_item_company_hris_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n**Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon\nCustom rules can be created to associate specific attributes to pay statement items depending on the use case. For example, pay statement items that meet certain conditions can be labeled as a pre-tax 401k. This metadata can be retrieved where pay statement item information is available.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'Finch id (uuidv4) for the rule.'\n    },\n    attributes: {\n      type: 'object',\n      description: 'Specifies the fields to be applied when the condition is met.',\n      properties: {\n        metadata: {\n          type: 'object',\n          description: 'The metadata to be attached in the entity. It is a key-value pairs where the values can be of any type (string, number, boolean, object, array, etc.).'\n        }\n      }\n    },\n    conditions: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          field: {\n            type: 'string',\n            description: 'The field to be checked in the rule.'\n          },\n          operator: {\n            type: 'string',\n            description: 'The operator to be used in the rule.',\n            enum: [              'equals'\n            ]\n          },\n          value: {\n            type: 'string',\n            description: 'The value of the field to be checked in the rule.'\n          }\n        }\n      }\n    },\n    created_at: {\n      type: 'string',\n      description: 'The datetime when the rule was created.',\n      format: 'date-time'\n    },\n    effective_end_date: {\n      type: 'string',\n      title: 'Date',\n      description: 'Specifies when the rules should stop applying rules based on the date.'\n    },\n    effective_start_date: {\n      type: 'string',\n      title: 'Date',\n      description: 'Specifies when the rule should begin applying based on the date.'\n    },\n    entity_type: {\n      type: 'string',\n      description: 'The entity type to which the rule is applied.',\n      enum: [        'pay_statement_item'\n      ]\n    },\n    priority: {\n      type: 'integer',\n      description: 'The priority of the rule.'\n    },\n    updated_at: {\n      type: 'string',\n      description: 'The datetime when the rule was last updated.',\n      format: 'date-time'\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.hris.company.payStatementItem.rules.create(body)),
  );
};

export default { metadata, tool, handler };
