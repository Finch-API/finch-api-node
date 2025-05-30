// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  // prism tests are broken
  test.skip('new: only required params', async () => {
    const responsePromise = client.connect.sessions.new({
      customer_id: 'x',
      customer_name: 'x',
      products: ['company'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism tests are broken
  test.skip('new: required and optional params', async () => {
    const response = await client.connect.sessions.new({
      customer_id: 'x',
      customer_name: 'x',
      products: ['company'],
      customer_email: 'dev@stainless.com',
      integration: { auth_method: 'assisted', provider: 'provider' },
      manual: true,
      minutes_to_expire: 1,
      redirect_uri: 'redirect_uri',
      sandbox: 'finch',
    });
  });

  // prism tests are broken
  test.skip('reauthenticate: only required params', async () => {
    const responsePromise = client.connect.sessions.reauthenticate({ connection_id: 'connection_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism tests are broken
  test.skip('reauthenticate: required and optional params', async () => {
    const response = await client.connect.sessions.reauthenticate({
      connection_id: 'connection_id',
      minutes_to_expire: 0,
      products: ['company'],
      redirect_uri: 'https://example.com',
    });
  });
});
