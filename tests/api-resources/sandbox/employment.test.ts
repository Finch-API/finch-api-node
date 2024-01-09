// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employment', () => {
  test('update', async () => {
    const responsePromise = finch.sandbox.employment.update('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.sandbox.employment.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.sandbox.employment.update(
        'string',
        {
          class_code: 'string',
          custom_fields: [
            { name: 'string', value: {} },
            { name: 'string', value: {} },
            { name: 'string', value: {} },
          ],
          department: { name: 'string' },
          employment: { type: 'employee', subtype: 'full_time' },
          end_date: 'string',
          first_name: 'string',
          income: { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
          income_history: [
            { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
            { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
            { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
          ],
          is_active: true,
          last_name: 'string',
          location: {
            line1: 'string',
            line2: 'string',
            city: 'string',
            state: 'string',
            postal_code: 'string',
            country: 'string',
            name: 'string',
            source_id: 'string',
          },
          manager: { id: 'string' },
          middle_name: 'string',
          source_id: 'string',
          start_date: '3/4/2020',
          title: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
