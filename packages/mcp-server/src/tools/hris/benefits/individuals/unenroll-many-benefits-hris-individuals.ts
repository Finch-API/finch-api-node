// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits.individuals',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/employer/benefits/{benefit_id}/individuals',
  operationId: 'delete-individual-benefits',
};

export const tool: Tool = {
  name: 'unenroll_many_benefits_hris_individuals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUnenroll individuals from a deduction or contribution\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/unenrolled_individual_benefit_response',\n  $defs: {\n    unenrolled_individual_benefit_response: {\n      type: 'object',\n      properties: {\n        job_id: {\n          type: 'string'\n        }\n      },\n      required: [        'job_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      benefit_id: {
        type: 'string',
      },
      individual_ids: {
        type: 'array',
        description: 'Array of individual_ids to unenroll.',
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
    required: ['benefit_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { benefit_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.hris.benefits.individuals.unenrollMany(benefit_id, body)),
  );
};

export default { metadata, tool, handler };
