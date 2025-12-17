// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connections', () => {
  // prism tests are broken
  test.skip('create: only required params', async () => {
    const responsePromise = client.sandbox.connections.create({ provider_id: 'provider_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism tests are broken
  test.skip('create: required and optional params', async () => {
    const response = await client.sandbox.connections.create({
      provider_id: 'provider_id',
      authentication_type: 'credential',
      employee_size: 0,
      products: ['string'],
    });
  });
});
