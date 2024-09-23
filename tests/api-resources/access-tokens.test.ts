// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accessTokens', () => {
  test('create: only required params', async () => {
    const responsePromise = client.accessTokens.create({ code: '<your_authorization_code>' });
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
      code: '<your_authorization_code>',
      client_id: '6d28c315-5eaa-4071-8ea5-f030eb45edbc',
      client_secret: '<your_client_secret>',
      redirect_uri: 'https://example.com',
    });
  });
});
