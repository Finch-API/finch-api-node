// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'hris.directory',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/employer/directory',
  operationId: 'get-directory',
};

export const tool: Tool = {
  name: 'list_individuals_hris_directory',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRead company directory and organization structure\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    individuals: {\n      type: 'array',\n      description: 'The array of employees.',\n      items: {\n        $ref: '#/$defs/individual_in_directory'\n      }\n    },\n    paging: {\n      $ref: '#/$defs/paging'\n    }\n  },\n  required: [    'individuals',\n    'paging'\n  ],\n  $defs: {\n    individual_in_directory: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A stable Finch `id` (UUID v4) for an individual in the company.'\n        },\n        department: {\n          type: 'object',\n          description: 'The department object.',\n          properties: {\n            name: {\n              type: 'string',\n              description: 'The name of the department.'\n            }\n          }\n        },\n        first_name: {\n          type: 'string',\n          description: 'The legal first name of the individual.'\n        },\n        is_active: {\n          type: 'boolean',\n          description: '`true` if the individual is an active employee or contractor at the company.'\n        },\n        last_name: {\n          type: 'string',\n          description: 'The legal last name of the individual.'\n        },\n        manager: {\n          type: 'object',\n          description: 'The manager object.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'A stable Finch `id` (UUID v4) for an individual in the company.'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        middle_name: {\n          type: 'string',\n          description: 'The legal middle name of the individual.'\n        }\n      },\n      required: [        'id',\n        'department',\n        'first_name',\n        'is_active',\n        'last_name',\n        'manager',\n        'middle_name'\n      ]\n    },\n    paging: {\n      type: 'object',\n      title: 'Paging',\n      properties: {\n        offset: {\n          type: 'integer',\n          description: 'The current start index of the returned list of elements'\n        },\n        count: {\n          type: 'integer',\n          description: 'The total number of elements for the entire query (not just the given page)'\n        }\n      },\n      required: [        'offset'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Number of employees to return (defaults to all)',
      },
      offset: {
        type: 'integer',
        description: 'Index to start from (defaults to 0)',
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
  const response = await client.hris.directory.listIndividuals(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
