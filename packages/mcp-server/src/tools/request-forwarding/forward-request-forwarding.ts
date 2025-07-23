// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@tryfinch/finch-api-mcp/filtering';
import { Metadata, asTextContentResult } from '@tryfinch/finch-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Finch from '@tryfinch/finch-api';

export const metadata: Metadata = {
  resource: 'request_forwarding',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/forward',
  operationId: 'post-forward',
};

export const tool: Tool = {
  name: 'forward_request_forwarding',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe Forward API allows you to make direct requests to an employment system. If Finch’s unified API\ndoesn’t have a data model that cleanly fits your needs, then Forward allows you to push or pull\ndata models directly against an integration’s API.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'string',\n      description: 'A string representation of the HTTP response body of the forwarded request’s response received from the underlying integration’s API. This field may be null in the case where the upstream system’s response is empty.'\n    },\n    headers: {\n      type: 'object',\n      description: 'The HTTP headers of the forwarded request’s response, exactly as received from the underlying integration’s API.'\n    },\n    request: {\n      type: 'object',\n      description: 'An object containing details of your original forwarded request, for your ease of reference.',\n      properties: {\n        data: {\n          type: 'string',\n          description: 'The body that was specified for the forwarded request. If a value was not specified in the original request, this value will be returned as null ; otherwise, this value will always be returned as a string.'\n        },\n        headers: {\n          type: 'object',\n          description: 'The specified HTTP headers that were included in the forwarded request. If no headers were specified, this will be returned as `null`.'\n        },\n        method: {\n          type: 'string',\n          description: 'The HTTP method that was specified for the forwarded request. Valid values include: `GET` , `POST` , `PUT` , `DELETE` , and `PATCH`.'\n        },\n        params: {\n          type: 'object',\n          description: 'The query parameters that were included in the forwarded request. If no query parameters were specified, this will be returned as `null`.'\n        },\n        route: {\n          type: 'string',\n          description: 'The URL route path that was specified for the forwarded request.'\n        }\n      },\n      required: [        'data',\n        'headers',\n        'method',\n        'params',\n        'route'\n      ]\n    },\n    statusCode: {\n      type: 'integer',\n      description: 'The HTTP status code of the forwarded request’s response, exactly received from the underlying integration’s API. This value will be returned as an integer.'\n    }\n  },\n  required: [    'data',\n    'headers',\n    'request',\n    'statusCode'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      method: {
        type: 'string',
        description:
          'The HTTP method for the forwarded request. Valid values include: `GET` , `POST` , `PUT` , `DELETE` , and `PATCH`.',
      },
      route: {
        type: 'string',
        description:
          'The URL route path for the forwarded request. This value must begin with a forward-slash ( / ) and may only contain alphanumeric characters, hyphens, and underscores.',
      },
      data: {
        type: 'string',
        description:
          'The body for the forwarded request. This value must be specified as either a string or a valid JSON object.',
      },
      headers: {
        type: 'object',
        description:
          'The HTTP headers to include on the forwarded request. This value must be specified as an object of key-value pairs. Example: `{"Content-Type": "application/xml", "X-API-Version": "v1" }`',
      },
      params: {
        type: 'object',
        description:
          'The query parameters for the forwarded request. This value must be specified as a valid JSON object rather than a query string.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['method', 'route'],
  },
  annotations: {},
};

export const handler = async (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.requestForwarding.forward(body)));
};

export default { metadata, tool, handler };
