// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/employer/benefits/{benefit_id}',
  operationId: 'update-company-benefits',
};

export const tool: Tool = {
  name: 'update_hris_benefits',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an existing company-wide deduction or contribution\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/update_company_benefit_response',\n  $defs: {\n    update_company_benefit_response: {\n      type: 'object',\n      properties: {\n        benefit_id: {\n          type: 'string',\n          description: 'The id of the benefit.'\n        },\n        job_id: {\n          type: 'string'\n        }\n      },\n      required: [        'benefit_id',\n        'job_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      benefit_id: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Updated name or description.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['benefit_id'],
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { benefit_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.hris.benefits.update(benefit_id, body)));
};

export default { metadata, tool, handler };
