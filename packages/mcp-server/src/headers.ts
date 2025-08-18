// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from '@tryfinch/finch-api/index';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { accessToken: req.headers.authorization.slice('Bearer '.length) };
      case 'Basic':
        const rawValue = Buffer.from(value, 'base64').toString();
        return {
          clientId: rawValue.slice(0, rawValue.search(':')),
          clientSecret: rawValue.slice(rawValue.search(':') + 1),
        };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const clientId =
    Array.isArray(req.headers['x-finch-client-id']) ?
      req.headers['x-finch-client-id'][0]
    : req.headers['x-finch-client-id'];
  const clientSecret =
    Array.isArray(req.headers['x-finch-client-secret']) ?
      req.headers['x-finch-client-secret'][0]
    : req.headers['x-finch-client-secret'];
  return { clientId, clientSecret };
};
