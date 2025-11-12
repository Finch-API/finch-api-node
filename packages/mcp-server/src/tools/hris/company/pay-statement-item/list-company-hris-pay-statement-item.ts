// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.company.pay_statement_item',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/pay-statement-item',
  operationId: 'get-pay-statement-item',
};

export const tool: Tool = {
  name: 'list_company_hris_pay_statement_item',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n**Beta:** this endpoint currently serves employers onboarded after March 4th and historical support will be added soon\n Retrieve a list of detailed pay statement items for the access token's connection account.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    responses: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/pay_statement_item_list_response'\n      }\n    }\n  },\n  required: [    'responses'\n  ],\n  $defs: {\n    pay_statement_item_list_response: {\n      type: 'object',\n      properties: {\n        attributes: {\n          type: 'object',\n          description: 'The attributes of the pay statement item.',\n          properties: {\n            metadata: {\n              type: 'object',\n              description: 'The metadata of the pay statement item derived by the rules engine if available. Each attribute will be a key-value pair defined by a rule.',\n              additionalProperties: true\n            },\n            employer: {\n              type: 'boolean',\n              description: '`true` if the amount is paid by the employers. This field is only available for taxes.'\n            },\n            pre_tax: {\n              type: 'boolean',\n              description: '`true` if the pay statement item is pre-tax. This field is only available for employee deductions.'\n            },\n            type: {\n              type: 'string',\n              description: 'The type of the pay statement item.'\n            }\n          },\n          required: [            'metadata'\n          ]\n        },\n        category: {\n          type: 'string',\n          description: 'The category of the pay statement item.',\n          enum: [            'earnings',\n            'taxes',\n            'employee_deductions',\n            'employer_contributions'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the pay statement item.'\n        }\n      },\n      required: [        'attributes',\n        'category',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      categories: {
        type: 'array',
        description:
          'Comma-delimited list of pay statement item categories to filter on. If empty, defaults to all categories.',
        items: {
          type: 'string',
          enum: ['earnings', 'taxes', 'employee_deductions', 'employer_contributions'],
        },
      },
      end_date: {
        type: 'string',
        description:
          'The end date to retrieve pay statement items by via their last seen pay date in `YYYY-MM-DD` format.',
        format: 'date',
      },
      entity_ids: {
        type: 'array',
        description: "The entity IDs to specify which entities' data to access.",
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
        description: 'Case-insensitive partial match search by pay statement item name.',
      },
      start_date: {
        type: 'string',
        description:
          'The start date to retrieve pay statement items by via their last seen pay date (inclusive) in `YYYY-MM-DD` format.',
        format: 'date',
      },
      type: {
        type: 'string',
        description: 'String search by pay statement item type.',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.hris.company.payStatementItem.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
