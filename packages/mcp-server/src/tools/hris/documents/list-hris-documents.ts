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
  httpPath: '/employer/documents',
  operationId: 'list-documents',
};

export const tool: Tool = {
  name: 'list_hris_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n**Beta:** This endpoint is in beta and may change.\nRetrieve a list of company-wide documents.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/document_list_response',\n  $defs: {\n    document_list_response: {\n      type: 'object',\n      properties: {\n        documents: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/document_response'\n          }\n        },\n        paging: {\n          $ref: '#/$defs/paging'\n        }\n      },\n      required: [        'documents',\n        'paging'\n      ]\n    },\n    document_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'A stable Finch id for the document.'\n        },\n        individual_id: {\n          type: 'string',\n          description: 'The ID of the individual associated with the document. This will be null for employer-level documents.'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of document.',\n          enum: [            'w4_2020',\n            'w4_2005'\n          ]\n        },\n        url: {\n          type: 'string',\n          description: 'A URL to access the document. Format: `https://api.tryfinch.com/employer/documents/:document_id`.'\n        },\n        year: {\n          type: 'number',\n          description: 'The year the document applies to, if available.'\n        }\n      },\n      required: [        'id',\n        'individual_id',\n        'type',\n        'url',\n        'year'\n      ]\n    },\n    paging: {\n      type: 'object',\n      title: 'Paging',\n      properties: {\n        offset: {\n          type: 'integer',\n          description: 'The current start index of the returned list of elements'\n        },\n        count: {\n          type: 'integer',\n          description: 'The total number of elements for the entire query (not just the given page)'\n        }\n      },\n      required: [        'offset'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      individual_ids: {
        type: 'array',
        description:
          'Comma-delimited list of stable Finch uuids for each individual. If empty, defaults to all individuals',
        items: {
          type: 'string',
        },
      },
      limit: {
        type: 'integer',
        description: 'Number of documents to return (defaults to all)',
      },
      offset: {
        type: 'integer',
        description: 'Index to start from (defaults to 0)',
      },
      types: {
        type: 'array',
        description: 'Comma-delimited list of document types to filter on. If empty, defaults to all types',
        items: {
          type: 'string',
          enum: ['w4_2020', 'w4_2005'],
        },
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.hris.documents.list(body)));
};

export default { metadata, tool, handler };
