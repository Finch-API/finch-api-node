// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payStatementItem', () => {
  test('list: only required params', async () => {
    const responsePromise = client.hris.company.payStatementItem.list({
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
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
    const response = await client.hris.company.payStatementItem.list({
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
      categories: ['earnings'],
      end_date: '2024-07-01',
      name: 'name',
      start_date: '2024-01-01',
      type: 'base_compensation',
    });
  });
});
