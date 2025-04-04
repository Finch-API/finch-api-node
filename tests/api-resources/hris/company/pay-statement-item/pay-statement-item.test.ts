// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payStatementItem', () => {
  test('list', async () => {
    const responsePromise = client.hris.company.payStatementItem.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.company.payStatementItem.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.company.payStatementItem.list(
        {
          categories: ['earnings'],
          end_date: '2024-07-01',
          name: 'name',
          start_date: '2024-01-01',
          type: 'base_compensation',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
