// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sandbox.connections.accounts.create({
      company_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      provider_id: 'provider_id',
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
    const response = await client.sandbox.connections.accounts.create({
      company_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      provider_id: 'provider_id',
      authentication_type: 'credential',
      products: ['string', 'string', 'string'],
    });
  });

  test('update', async () => {
    const responsePromise = client.sandbox.connections.accounts.update();
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
      client.sandbox.connections.accounts.update({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandbox.connections.accounts.update(
        { connection_status: 'pending' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
