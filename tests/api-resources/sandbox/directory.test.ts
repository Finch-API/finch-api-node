// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource directory', () => {
  test('create', async () => {
    const responsePromise = client.sandbox.directory.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sandbox.directory.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandbox.directory.create(
        [
          {
            class_code: 'class_code',
            custom_fields: [{ name: 'name', value: {} }],
            department: { name: 'name' },
            dob: 'dob',
            emails: [{ data: 'data', type: 'work' }],
            employment: { subtype: 'full_time', type: 'employee' },
            employment_status: 'active',
            encrypted_ssn: 'encrypted_ssn',
            end_date: 'end_date',
            ethnicity: 'asian',
            first_name: 'first_name',
            gender: 'female',
            income: { amount: 0, currency: 'currency', effective_date: 'effective_date', unit: 'yearly' },
            income_history: [
              { amount: 0, currency: 'currency', effective_date: 'effective_date', unit: 'yearly' },
            ],
            is_active: true,
            last_name: 'last_name',
            latest_rehire_date: 'latest_rehire_date',
            location: {
              city: 'city',
              country: 'country',
              line1: 'line1',
              line2: 'line2',
              postal_code: 'postal_code',
              state: 'state',
              name: 'name',
              source_id: 'source_id',
            },
            manager: { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
            middle_name: 'middle_name',
            phone_numbers: [{ data: 'data', type: 'work' }],
            preferred_name: 'preferred_name',
            residence: {
              city: 'city',
              country: 'country',
              line1: 'line1',
              line2: 'line2',
              postal_code: 'postal_code',
              state: 'state',
              name: 'name',
              source_id: 'source_id',
            },
            source_id: 'source_id',
            ssn: 'ssn',
            start_date: 'start_date',
            title: 'title',
          },
        ],
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
