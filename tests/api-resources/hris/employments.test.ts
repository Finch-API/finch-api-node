// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  clientId: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employments', () => {
  test('retrieveMany: only required params', async () => {
    const responsePromise = finch.hris.employments.retrieveMany({
      requests: [{ individual_id: 'string' }, { individual_id: 'string' }, { individual_id: 'string' }],
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
    const response = await finch.hris.employments.retrieveMany({
      requests: [{ individual_id: 'string' }, { individual_id: 'string' }, { individual_id: 'string' }],
    });
  });
});
