// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource directory', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sandbox.directory.create([{}]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.sandbox.directory.create([
      {
        class_code: 'class_code',
        custom_fields: [{ name: 'name', value: {} }],
        department: { name: 'name' },
        dob: '01/01/2000',
        emails: [{ data: 'data', type: 'work' }],
        employment: { subtype: 'full_time', type: 'employee' },
        encrypted_ssn: 'encrypted_ssn',
        end_date: 'end_date',
        ethnicity: 'asian',
        first_name: 'John',
        gender: 'female',
        income: { amount: 0, currency: 'currency', effective_date: 'effective_date', unit: 'yearly' },
        income_history: [
          { amount: 0, currency: 'currency', effective_date: 'effective_date', unit: 'yearly' },
        ],
        is_active: true,
        last_name: 'Smith',
        latest_rehire_date: 'latest_rehire_date',
        location: {
          city: 'city',
          country: 'country',
          line1: 'line1',
          line2: 'line2',
          name: 'name',
          postal_code: 'postal_code',
          source_id: 'source_id',
          state: 'state',
        },
        manager: { id: 'id' },
        middle_name: 'middle_name',
        phone_numbers: [{ data: 'data', type: 'work' }],
        preferred_name: 'preferred_name',
        residence: {
          city: 'city',
          country: 'country',
          line1: 'line1',
          line2: 'line2',
          name: 'name',
          postal_code: 'postal_code',
          source_id: 'source_id',
          state: 'state',
        },
        source_id: 'source_id',
        ssn: 'ssn',
        start_date: 'start_date',
        title: 'title',
      },
    ]);
  });
});
