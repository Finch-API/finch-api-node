// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from '@tryfinch/finch-api';

export const parseAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { accessToken: req.headers.authorization.slice('Bearer '.length) };
      case 'Basic':
        const rawValue = Buffer.from(value, 'base64').toString();
        return {
          clientID: rawValue.slice(0, rawValue.search(':')),
          clientSecret: rawValue.slice(rawValue.search(':') + 1),
        };
      default:
        throw new Error(
          'Unsupported authorization scheme. Expected the "Authorization" header to be a supported scheme (Bearer, Basic).',
        );
    }
  } else if (required) {
    throw new Error('Missing required Authorization header; see WWW-Authenticate header for details.');
  }

  const clientID =
    Array.isArray(req.headers['x-finch-client-id']) ?
      req.headers['x-finch-client-id'][0]
    : req.headers['x-finch-client-id'];
  const clientSecret =
    Array.isArray(req.headers['x-finch-client-secret']) ?
      req.headers['x-finch-client-secret'][0]
    : req.headers['x-finch-client-secret'];
  return { clientID, clientSecret };
};
