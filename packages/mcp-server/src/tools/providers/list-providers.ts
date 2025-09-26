// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'providers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/providers',
  operationId: 'get-providers',
};

export const tool: Tool = {
  name: 'list_providers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturn details on all available payroll and HR systems.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string',\n        description: 'The id of the payroll provider used in Connect.'\n      },\n      display_name: {\n        type: 'string',\n        description: 'The display name of the payroll provider.'\n      },\n      products: {\n        type: 'array',\n        description: 'The list of Finch products supported on this payroll provider.',\n        items: {\n          type: 'string'\n        }\n      },\n      authentication_methods: {\n        type: 'array',\n        description: 'The authentication methods supported by the provider.',\n        items: {\n          type: 'object',\n          properties: {\n            type: {\n              type: 'string',\n              description: 'The type of authentication method',\n              enum: [                'assisted',\n                'credential',\n                'api_token',\n                'api_credential',\n                'oauth',\n                'api'\n              ]\n            },\n            benefits_support: {\n              type: 'object',\n              description: 'The supported benefit types and their configurations',\n              additionalProperties: true\n            },\n            supported_fields: {\n              type: 'object',\n              description: 'The supported fields for each Finch product',\n              additionalProperties: true\n            }\n          },\n          required: [            'type'\n          ]\n        }\n      },\n      beta: {\n        type: 'boolean',\n        description: '`true` if the integration is in a beta state, `false` otherwise'\n      },\n      icon: {\n        type: 'string',\n        description: 'The url to the official icon of the payroll provider.'\n      },\n      logo: {\n        type: 'string',\n        description: 'The url to the official logo of the payroll provider.'\n      },\n      manual: {\n        type: 'boolean',\n        description: '[DEPRECATED] Whether the Finch integration with this provider uses the Assisted Connect Flow by default. This field is now deprecated. Please check for a `type` of `assisted` in the `authentication_methods` field instead.'\n      },\n      mfa_required: {\n        type: 'boolean',\n        description: 'whether MFA is required for the provider.'\n      },\n      primary_color: {\n        type: 'string',\n        description: 'The hex code for the primary color of the payroll provider.'\n      }\n    },\n    required: [      'id',\n      'display_name',\n      'products'\n    ]\n  }\n}\n```",
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
  const { jq_filter } = args as any;
  const response = await client.providers.list().asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
