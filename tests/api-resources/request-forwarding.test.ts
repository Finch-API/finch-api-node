// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource requestForwarding', () => {
  test('forward: only required params', async () => {
    const responsePromise = client.requestForwarding.forward({ method: 'method', route: 'route' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('forward: required and optional params', async () => {
    const response = await client.requestForwarding.forward({
      method: 'method',
      route: 'route',
      data: 'data',
      headers: { foo: 'bar' },
      params: { foo: 'bar' },
    });
  });
});
