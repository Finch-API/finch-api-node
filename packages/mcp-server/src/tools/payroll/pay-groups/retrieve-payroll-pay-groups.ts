// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead information from a single pay group\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'Finch id (uuidv4) for the pay group'\n    },\n    individual_ids: {\n      type: 'array',\n      items: {\n        type: 'string',\n        description: 'Finch id (uuidv4) for an individual assigned to this pay group'\n      }\n    },\n    name: {\n      type: 'string',\n      description: 'Name of the pay group'\n    },\n    pay_frequencies: {\n      type: 'array',\n      description: 'List of pay frequencies associated with this pay group',\n      items: {\n        type: 'string',\n        enum: [          'annually',\n          'bi_weekly',\n          'daily',\n          'monthly',\n          'other',\n          'quarterly',\n          'semi_annually',\n          'semi_monthly',\n          'weekly'\n        ]\n      }\n    }\n  },\n  required: [    'id',\n    'individual_ids',\n    'name',\n    'pay_frequencies'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      pay_group_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { pay_group_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.payroll.payGroups.retrieve(pay_group_id)));
};

export default { metadata, tool, handler };
