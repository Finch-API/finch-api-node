// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.benefits.individuals',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/employer/benefits/{benefit_id}/individuals',
  operationId: 'post-employer-individual-benefits-benefit_id',
};

export const tool: Tool = {
  name: 'enroll_many_benefits_hris_individuals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEnroll an individual into a deduction or contribution. This is an overwrite operation. If the employee is already enrolled, the enrollment amounts will be adjusted. Making the same request multiple times will not create new enrollments, but will continue to set the state of the existing enrollment.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/enrolled_individual_benefit_response',\n  $defs: {\n    enrolled_individual_benefit_response: {\n      type: 'object',\n      properties: {\n        job_id: {\n          type: 'string'\n        }\n      },\n      required: [        'job_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      benefit_id: {
        type: 'string',
      },
      individuals: {
        type: 'array',
        description: 'Array of the individual_id to enroll and a configuration object.',
        items: {
          type: 'object',
          properties: {
            configuration: {
              type: 'object',
              properties: {
                annual_contribution_limit: {
                  type: 'string',
                  description:
                    'For HSA benefits only - whether the contribution limit is for an individual or family',
                  enum: ['individual', 'family'],
                },
                annual_maximum: {
                  type: 'integer',
                  description: 'Maximum annual amount in cents',
                },
                catch_up: {
                  type: 'boolean',
                  description: 'For retirement benefits only - whether catch up contributions are enabled',
                },
                company_contribution: {
                  type: 'object',
                  properties: {
                    amount: {
                      type: 'integer',
                      description:
                        'Amount in cents for fixed type or basis points (1/100th of a percent) for percent type',
                    },
                    type: {
                      type: 'string',
                      enum: ['fixed', 'percent'],
                    },
                  },
                },
                effective_date: {
                  type: 'string',
                  description: 'The date the enrollment will take effect',
                  format: 'date',
                },
                employee_deduction: {
                  type: 'object',
                  properties: {
                    amount: {
                      type: 'integer',
                      description:
                        'Amount in cents for fixed type or basis points (1/100th of a percent) for percent type',
                    },
                    type: {
                      type: 'string',
                      enum: ['fixed', 'percent'],
                    },
                  },
                },
              },
            },
            individual_id: {
              type: 'string',
              description: 'Finch id (uuidv4) for the individual to enroll',
            },
          },
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
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { benefit_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.hris.benefits.individuals.enrollMany(benefit_id, body['individuals']),
    ),
  );
};

export default { metadata, tool, handler };
