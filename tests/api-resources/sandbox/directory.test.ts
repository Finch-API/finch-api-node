// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  clientId: '4ab15e51-11ad-49f4-acae-f343b7794375',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource directory', () => {
  test('create: only required params', async () => {
    const responsePromise = finch.sandbox.directory.create([{}]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await finch.sandbox.directory.create([
      {
        first_name: 'John',
        middle_name: 'middle_name',
        last_name: 'Smith',
        preferred_name: 'preferred_name',
        emails: [
          { data: 'data', type: 'work' },
          { data: 'data', type: 'work' },
          { data: 'data', type: 'work' },
        ],
        phone_numbers: [
          { data: 'data', type: 'work' },
          { data: 'data', type: 'work' },
          { data: 'data', type: 'work' },
        ],
        gender: 'female',
        ethnicity: 'asian',
        dob: '01/01/2000',
        ssn: 'ssn',
        encrypted_ssn: 'encrypted_ssn',
        residence: {
          line1: 'line1',
          line2: 'line2',
          city: 'city',
          state: 'state',
          postal_code: 'postal_code',
          country: 'country',
          name: 'name',
          source_id: 'source_id',
        },
        title: 'title',
        manager: { id: 'id' },
        department: { name: 'name' },
        employment: { type: 'employee', subtype: 'full_time' },
        start_date: 'start_date',
        end_date: 'end_date',
        is_active: true,
        class_code: 'class_code',
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
        income: { unit: 'yearly', amount: 0, currency: 'currency', effective_date: 'effective_date' },
        income_history: [
          { unit: 'yearly', amount: 0, currency: 'currency', effective_date: 'effective_date' },
          { unit: 'yearly', amount: 0, currency: 'currency', effective_date: 'effective_date' },
          { unit: 'yearly', amount: 0, currency: 'currency', effective_date: 'effective_date' },
        ],
        custom_fields: [
          { name: 'name', value: {} },
          { name: 'name', value: {} },
          { name: 'name', value: {} },
        ],
        source_id: 'source_id',
      },
    ]);
  });
});
