// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';

const client = new Finch({
  accessToken: 'My Access Token',
  clientID: '4ab15e51-11ad-49f4-acae-f343b7794375',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accessTokens', () => {
  // prism doesnt like the format for the API-Version header
  test.skip('create: only required params', async () => {
    const responsePromise = client.accessTokens.create({ code: 'code' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism doesnt like the format for the API-Version header
  test.skip('create: required and optional params', async () => {
    const response = await client.accessTokens.create({
      code: 'code',
      client_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      client_secret: 'client_secret',
      redirect_uri: 'redirect_uri',
    });
  });
});
