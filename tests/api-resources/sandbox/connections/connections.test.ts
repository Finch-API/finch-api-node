// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connections', () => {
  // Auth isn't setup correctly in this test
  test.skip('create: only required params', async () => {
    const responsePromise = finch.sandbox.connections.create({ provider_id: 'string' });
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
    const response = await finch.sandbox.connections.create({
      provider_id: 'string',
      authentication_type: 'credential',
      employee_size: 0,
      products: ['string', 'string', 'string'],
    });
  });
});
