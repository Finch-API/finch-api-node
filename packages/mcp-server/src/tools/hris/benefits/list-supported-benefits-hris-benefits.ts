// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/benefits/meta',
  operationId: 'get-company-benefits-meta',
};

export const tool: Tool = {
  name: 'list_supported_benefits_hris_benefits',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet deductions metadata\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/supported_benefit'\n  },\n  $defs: {\n    supported_benefit: {\n      type: 'object',\n      title: 'BenefitFeature',\n      properties: {\n        annual_maximum: {\n          type: 'boolean',\n          description: 'Whether the provider supports an annual maximum for this benefit.'\n        },\n        company_contribution: {\n          type: 'array',\n          description: 'Supported contribution types. An empty array indicates contributions are not supported.',\n          items: {\n            type: 'string',\n            enum: [              'fixed',\n              'percent'\n            ]\n          }\n        },\n        description: {\n          type: 'string'\n        },\n        employee_deduction: {\n          type: 'array',\n          description: 'Supported deduction types. An empty array indicates deductions are not supported.',\n          items: {\n            type: 'string',\n            enum: [              'fixed',\n              'percent'\n            ]\n          }\n        },\n        frequencies: {\n          type: 'array',\n          description: 'The list of frequencies supported by the provider for this benefit',\n          items: {\n            $ref: '#/$defs/benefit_frequency'\n          }\n        },\n        catch_up: {\n          type: 'boolean',\n          description: 'Whether the provider supports catch up for this benefit. This field will only be true for retirement benefits.'\n        },\n        hsa_contribution_limit: {\n          type: 'array',\n          description: 'Whether the provider supports HSA contribution limits. Empty if this feature is not supported for the benefit. This array only has values for HSA benefits.',\n          items: {\n            type: 'string',\n            enum: [              'family',\n              'individual'\n            ]\n          }\n        }\n      },\n      required: [        'annual_maximum',\n        'company_contribution',\n        'description',\n        'employee_deduction',\n        'frequencies'\n      ]\n    },\n    benefit_frequency: {\n      type: 'string',\n      title: 'BenefitFrequency',\n      description: 'The frequency of the benefit deduction/contribution.',\n      enum: [        'every_paycheck',\n        'monthly',\n        'one_time'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const response = await client.hris.benefits.listSupportedBenefits().asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
