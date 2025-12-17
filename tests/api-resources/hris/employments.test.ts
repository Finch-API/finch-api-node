// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employments', () => {
  test('retrieveMany: only required params', async () => {
    const responsePromise = client.hris.employments.retrieveMany({
      requests: [{ individual_id: 'individual_id' }],
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
    const response = await client.hris.employments.retrieveMany({
      requests: [{ individual_id: 'individual_id' }],
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });
});
