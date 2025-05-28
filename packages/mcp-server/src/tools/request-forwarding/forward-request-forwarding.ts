// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
    'The Forward API allows you to make direct requests to an employment system. If Finch’s unified API\ndoesn’t have a data model that cleanly fits your needs, then Forward allows you to push or pull\ndata models directly against an integration’s API.',
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
    },
  },
};

export const handler = (client: Finch, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.requestForwarding.forward(body);
};

export default { metadata, tool, handler };
