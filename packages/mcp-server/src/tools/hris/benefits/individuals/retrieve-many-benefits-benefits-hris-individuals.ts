// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits.individuals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/benefits/{benefit_id}/individuals',
  operationId: 'get-individual-benefits',
};

export const tool: Tool = {
  name: 'retrieve_many_benefits_benefits_hris_individuals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet enrollment information for the given individuals.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  title: 'IndividualBenefits',\n  items: {\n    $ref: '#/$defs/individual_benefit'\n  },\n  $defs: {\n    individual_benefit: {\n      type: 'object',\n      properties: {\n        body: {\n          type: 'object',\n          properties: {\n            annual_maximum: {\n              type: 'integer',\n              description: 'If the benefit supports annual maximum, the amount in cents for this individual.'\n            },\n            catch_up: {\n              type: 'boolean',\n              description: 'If the benefit supports catch up (401k, 403b, etc.), whether catch up is enabled for this individual.'\n            },\n            company_contribution: {\n              $ref: '#/$defs/benefit_contribution'\n            },\n            employee_deduction: {\n              $ref: '#/$defs/benefit_contribution'\n            },\n            hsa_contribution_limit: {\n              type: 'string',\n              description: 'Type for HSA contribution limit if the benefit is a HSA.',\n              enum: [                'individual',\n                'family'\n              ]\n            }\n          },\n          required: []\n        },\n        code: {\n          type: 'integer'\n        },\n        individual_id: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    benefit_contribution: {\n      type: 'object',\n      title: 'BenefitContribution',\n      properties: {\n        amount: {\n          type: 'integer',\n          description: 'Contribution amount in cents (if `fixed`) or basis points (if `percent`).'\n        },\n        type: {\n          type: 'string',\n          description: 'Contribution type.',\n          enum: [            'fixed',\n            'percent'\n          ]\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      benefit_id: {
        type: 'string',
      },
      individual_ids: {
        type: 'string',
        description:
          'comma-delimited list of stable Finch uuids for each individual. If empty, defaults to all individuals',
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
  const { benefit_id, ...body } = args as any;
  const response = await client.hris.benefits.individuals.retrieveManyBenefits(benefit_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
