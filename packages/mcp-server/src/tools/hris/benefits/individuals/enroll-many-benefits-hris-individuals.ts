// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
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
    'Enroll an individual into a deduction or contribution. This is an overwrite operation. If the employee is already enrolled, the enrollment amounts will be adjusted. Making the same request multiple times will not create new enrollments, but will continue to set the state of the existing enrollment.',
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
                  required: [],
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
                  required: [],
                },
              },
              required: [],
            },
            individual_id: {
              type: 'string',
              description: 'Finch id (uuidv4) for the individual to enroll',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const { benefit_id, ...body } = args as any;
  return asTextContentResult(
    await client.hris.benefits.individuals.enrollMany(benefit_id, body['individuals']),
  );
};

export default { metadata, tool, handler };
