// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  clientId: '4ab15e51-11ad-49f4-acae-f343b7794375',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource employment', () => {
  test('update', async () => {
    const responsePromise = client.sandbox.employment.update('individual_id');
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
      client.sandbox.employment.update('individual_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandbox.employment.update(
        'individual_id',
        {
          class_code: 'class_code',
          custom_fields: [
            { name: 'name', value: {} },
            { name: 'name', value: {} },
            { name: 'name', value: {} },
          ],
          department: { name: 'name' },
          employment: { type: 'employee', subtype: 'full_time' },
          end_date: 'end_date',
          first_name: 'first_name',
          income: { unit: 'yearly', amount: 0, currency: 'currency', effective_date: 'effective_date' },
          income_history: [
            { unit: 'yearly', amount: 0, currency: 'currency', effective_date: 'effective_date' },
            { unit: 'yearly', amount: 0, currency: 'currency', effective_date: 'effective_date' },
            { unit: 'yearly', amount: 0, currency: 'currency', effective_date: 'effective_date' },
          ],
          is_active: true,
          last_name: 'last_name',
          location: {
            line1: 'line1',
            line2: 'line2',
            city: 'city',
            state: 'state',
            postal_code: 'postal_code',
            country: 'country',
            name: 'name',
            source_id: 'source_id',
          },
          manager: { id: 'id' },
          middle_name: 'middle_name',
          source_id: 'source_id',
          start_date: '3/4/2020',
          title: 'title',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
