// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // Auth isn't setup correctly in this test
  test.skip('create: only required params', async () => {
    const responsePromise = finch.sandbox.connections.accounts.create({
      company_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      provider_id: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Auth isn't setup correctly in this test
  test.skip('create: required and optional params', async () => {
    const response = await finch.sandbox.connections.accounts.create({
      company_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      provider_id: 'string',
      authentication_type: 'credential',
      products: ['string', 'string', 'string'],
    });
  });

  test('update', async () => {
    const responsePromise = finch.sandbox.connections.accounts.update();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.sandbox.connections.accounts.update({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.sandbox.connections.accounts.update(
        { connection_status: 'reauth' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
