// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';

const client = new Finch({
  accessToken: 'My Access Token',
  clientID: '4ab15e51-11ad-49f4-acae-f343b7794375',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payStatements', () => {
  test('retrieveMany: only required params', async () => {
    const responsePromise = client.hris.payStatements.retrieveMany({
      requests: [{ payment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveMany: required and optional params', async () => {
    const response = await client.hris.payStatements.retrieveMany({
      requests: [
        {
          payment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 50,
          offset: 0,
        },
      ],
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });
});
