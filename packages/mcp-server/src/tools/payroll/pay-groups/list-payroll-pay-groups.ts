// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead company pay groups and frequencies\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/pay_group_list_response'\n  },\n  $defs: {\n    pay_group_list_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Finch id (uuidv4) for the pay group'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the pay group'\n        },\n        pay_frequencies: {\n          type: 'array',\n          description: 'List of pay frequencies associated with this pay group',\n          items: {\n            type: 'string',\n            enum: [              'annually',\n              'bi_weekly',\n              'daily',\n              'monthly',\n              'other',\n              'quarterly',\n              'semi_annually',\n              'semi_monthly',\n              'weekly'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'name',\n        'pay_frequencies'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entity_ids: {
        type: 'array',
        description: "The entity IDs to specify which entities' data to access.",
        items: {
          type: 'string',
        },
      },
      individual_id: {
        type: 'string',
      },
      pay_frequencies: {
        type: 'array',
        items: {
          type: 'string',
        },
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
  const response = await client.payroll.payGroups.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Finch.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
