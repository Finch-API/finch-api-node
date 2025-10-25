// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  test('list: only required params', async () => {
    const responsePromise = client.hris.payments.list({
      end_date: '2021-01-01',
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
      start_date: '2021-01-01',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.hris.payments.list({
      end_date: '2021-01-01',
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
      start_date: '2021-01-01',
    });
  });
});
