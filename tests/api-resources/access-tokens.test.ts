// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  clientId: '6d28c315-5eaa-4071-8ea5-f030eb45edbc',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accessTokens', () => {
  test('create: only required params', async () => {
    const responsePromise = client.accessTokens.create({
      client_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      client_secret: 'client_secret',
      code: 'code',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.accessTokens.create({
      client_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      client_secret: 'client_secret',
      code: 'code',
      redirect_uri: 'redirect_uri',
    });
  });
});
