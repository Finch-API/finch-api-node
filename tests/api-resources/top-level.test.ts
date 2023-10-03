// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'something1234',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  test('forward: only required params', async () => {
    const responsePromise = finch.forward({ method: 'string', route: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('forward: required and optional params', async () => {
    const response = await finch.forward({
      method: 'string',
      route: 'string',
      data: 'string',
      headers: {},
      params: {},
    });
  });

  test('getAccessToken', async () => {
    // TODO
  });

  test('getAuthUrl', async () => {
    // TODO
  });
});
