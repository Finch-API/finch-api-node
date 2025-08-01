// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.payments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/payment',
  operationId: 'get-payment',
};

export const tool: Tool = {
  name: 'list_hris_payments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead payroll and contractor related payments by the company.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/payment'\n  },\n  $defs: {\n    payment: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique id for the payment.'\n        },\n        company_debit: {\n          $ref: '#/$defs/money'\n        },\n        debit_date: {\n          type: 'string',\n          title: 'Date'\n        },\n        employee_taxes: {\n          $ref: '#/$defs/money'\n        },\n        employer_taxes: {\n          $ref: '#/$defs/money'\n        },\n        gross_pay: {\n          $ref: '#/$defs/money'\n        },\n        individual_ids: {\n          type: 'array',\n          description: 'Array of every individual on this payment.',\n          items: {\n            type: 'string'\n          }\n        },\n        net_pay: {\n          $ref: '#/$defs/money'\n        },\n        pay_date: {\n          type: 'string',\n          title: 'Date'\n        },\n        pay_frequencies: {\n          type: 'array',\n          description: 'List of pay frequencies associated with this payment.',\n          items: {\n            type: 'string',\n            enum: [              'annually',\n              'bi_weekly',\n              'daily',\n              'monthly',\n              'other',\n              'quarterly',\n              'semi_annually',\n              'semi_monthly',\n              'weekly'\n            ]\n          }\n        },\n        pay_group_ids: {\n          type: 'array',\n          description: 'Array of the Finch id (uuidv4) of every pay group associated with this payment.',\n          items: {\n            type: 'string'\n          }\n        },\n        pay_period: {\n          type: 'object',\n          description: 'The pay period object.',\n          properties: {\n            end_date: {\n              type: 'string',\n              title: 'Date'\n            },\n            start_date: {\n              type: 'string',\n              title: 'Date'\n            }\n          },\n          required: [            'end_date',\n            'start_date'\n          ]\n        }\n      },\n      required: [        'id',\n        'company_debit',\n        'debit_date',\n        'employee_taxes',\n        'employer_taxes',\n        'gross_pay',\n        'individual_ids',\n        'net_pay',\n        'pay_date',\n        'pay_frequencies',\n        'pay_group_ids',\n        'pay_period'\n      ]\n    },\n    money: {\n      type: 'object',\n      title: 'Money',\n      properties: {\n        amount: {\n          type: 'integer',\n          description: 'Amount for money object (in cents)'\n        },\n        currency: {\n          type: 'string'\n        }\n      },\n      required: [        'amount',\n        'currency'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      end_date: {
        type: 'string',
        description: 'The end date to retrieve payments by a company (inclusive) in `YYYY-MM-DD` format.',
        format: 'date',
      },
      start_date: {
        type: 'string',
        description: 'The start date to retrieve payments by a company (inclusive) in `YYYY-MM-DD` format.',
        format: 'date',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['end_date', 'start_date'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.hris.payments.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
