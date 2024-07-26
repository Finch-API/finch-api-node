// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  clientId: '4ab15e51-11ad-49f4-acae-f343b7794375',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connections', () => {
  // Auth isn't setup correctly in this test
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

  // Auth isn't setup correctly in this test
  test.skip('create: required and optional params', async () => {
    const response = await client.sandbox.connections.create({
      provider_id: 'provider_id',
      authentication_type: 'credential',
      employee_size: 0,
      products: ['string', 'string', 'string'],
    });
  });
});
