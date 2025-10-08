// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/documents/{document_id}',
  operationId: 'get-document',
};

export const tool: Tool = {
  name: 'retreive_hris_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n**Beta:** This endpoint is in beta and may change.\nRetrieve details of a specific document by its ID.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/document_retreive_response',\n  $defs: {\n    document_retreive_response: {\n      anyOf: [        {\n          $ref: '#/$defs/w42020'\n        },\n        {\n          $ref: '#/$defs/w42005'\n        }\n      ],\n      description: 'A 2020 version of the W-4 tax form containing information on an individual\\'s filing status, dependents, and withholding details.'\n    },\n    w42020: {\n      type: 'object',\n      description: 'A 2020 version of the W-4 tax form containing information on an individual\\'s filing status, dependents, and withholding details.',\n      properties: {\n        data: {\n          type: 'object',\n          description: 'Detailed information specific to the 2020 W4 form.',\n          properties: {\n            amount_for_other_dependents: {\n              type: 'integer',\n              description: 'Amount claimed for dependents other than qualifying children under 17 (in cents).'\n            },\n            amount_for_qualifying_children_under_17: {\n              type: 'integer',\n              description: 'Amount claimed for dependents under 17 years old (in cents).'\n            },\n            deductions: {\n              type: 'integer',\n              description: 'Deductible expenses (in cents).'\n            },\n            extra_withholding: {\n              type: 'integer',\n              description: 'Additional withholding amount (in cents).'\n            },\n            filing_status: {\n              type: 'string',\n              description: 'The individual\\'s filing status for tax purposes.',\n              enum: [                'head_of_household',\n                'married_filing_jointly_or_qualifying_surviving_spouse',\n                'single_or_married_filing_separately'\n              ]\n            },\n            individual_id: {\n              type: 'string',\n              description: 'The unique identifier for the individual associated with this document.'\n            },\n            other_income: {\n              type: 'integer',\n              description: 'Additional income from sources outside of primary employment (in cents).'\n            },\n            total_claim_dependent_and_other_credits: {\n              type: 'integer',\n              description: 'Total amount claimed for dependents and other credits (in cents).'\n            }\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'Specifies the form type, indicating that this document is a 2020 W4 form.',\n          enum: [            'w4_2020'\n          ]\n        },\n        year: {\n          type: 'number',\n          description: 'The tax year this W4 document applies to.'\n        }\n      }\n    },\n    w42005: {\n      type: 'object',\n      description: 'A 2005 version of the W-4 tax form containing information on an individual\\'s filing status, dependents, and withholding details.',\n      properties: {\n        data: {\n          type: 'object',\n          description: 'Detailed information specific to the 2005 W4 form.',\n          properties: {\n            additional_withholding: {\n              type: 'integer',\n              description: 'Additional withholding amount (in cents).'\n            },\n            exemption: {\n              type: 'string',\n              description: 'Indicates exemption status from federal tax withholding.',\n              enum: [                'exempt',\n                'non_exempt'\n              ]\n            },\n            filing_status: {\n              type: 'string',\n              description: 'The individual\\'s filing status for tax purposes.',\n              enum: [                'married',\n                'married_but_withhold_at_higher_single_rate',\n                'single'\n              ]\n            },\n            individual_id: {\n              type: 'string',\n              description: 'The unique identifier for the individual associated with this 2005 W4 form.'\n            },\n            total_number_of_allowances: {\n              type: 'integer',\n              description: 'Total number of allowances claimed (in cents).'\n            }\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'Specifies the form type, indicating that this document is a 2005 W4 form.',\n          enum: [            'w4_2005'\n          ]\n        },\n        year: {\n          type: 'number',\n          description: 'The tax year this W4 document applies to.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      document_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['document_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { document_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.hris.documents.retreive(document_id)));
};

export default { metadata, tool, handler };
