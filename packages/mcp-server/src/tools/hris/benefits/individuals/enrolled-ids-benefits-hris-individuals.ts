// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits.individuals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/benefits/{benefit_id}/enrolled',
  operationId: 'get-company-benefits-enrolled',
};

export const tool: Tool = {
  name: 'enrolled_ids_benefits_hris_individuals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists individuals currently enrolled in a given deduction.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    benefit_id: {\n      type: 'string',\n      description: 'The id of the benefit.'\n    },\n    individual_ids: {\n      type: 'array',\n      items: {\n        type: 'string',\n        description: 'A stable Finch `id` (UUID v4) for an individual in the company.'\n      }\n    }\n  },\n  required: [    'benefit_id',\n    'individual_ids'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      benefit_id: {
        type: 'string',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { benefit_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.hris.benefits.individuals.enrolledIds(benefit_id)),
  );
};

export default { metadata, tool, handler };
