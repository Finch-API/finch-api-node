// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource directory', () => {
  test('create: only required params', async () => {
    const responsePromise = finch.sandbox.directory.create([{}, {}, {}]);
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
        first_name: 'string',
        middle_name: 'string',
        last_name: 'string',
        preferred_name: 'string',
        emails: [
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
        ],
        phone_numbers: [
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
        ],
        gender: 'female',
        ethnicity: 'asian',
        dob: 'string',
        ssn: 'string',
        encrypted_ssn: 'string',
        residence: {
          line1: 'string',
          line2: 'string',
          city: 'string',
          state: 'string',
          postal_code: 'string',
          country: 'string',
          name: 'string',
          source_id: 'string',
        },
        title: 'string',
        manager: { id: 'string' },
        department: { name: 'string' },
        employment: { type: 'employee', subtype: 'full_time' },
        start_date: 'string',
        end_date: 'string',
        is_active: true,
        class_code: 'string',
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
        income: { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
        income_history: [
          { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
          { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
          { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
        ],
        custom_fields: [
          { name: 'string', value: {} },
          { name: 'string', value: {} },
          { name: 'string', value: {} },
        ],
        source_id: 'string',
      },
      {
        first_name: 'string',
        middle_name: 'string',
        last_name: 'string',
        preferred_name: 'string',
        emails: [
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
        ],
        phone_numbers: [
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
        ],
        gender: 'female',
        ethnicity: 'asian',
        dob: 'string',
        ssn: 'string',
        encrypted_ssn: 'string',
        residence: {
          line1: 'string',
          line2: 'string',
          city: 'string',
          state: 'string',
          postal_code: 'string',
          country: 'string',
          name: 'string',
          source_id: 'string',
        },
        title: 'string',
        manager: { id: 'string' },
        department: { name: 'string' },
        employment: { type: 'employee', subtype: 'full_time' },
        start_date: 'string',
        end_date: 'string',
        is_active: true,
        class_code: 'string',
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
        income: { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
        income_history: [
          { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
          { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
          { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
        ],
        custom_fields: [
          { name: 'string', value: {} },
          { name: 'string', value: {} },
          { name: 'string', value: {} },
        ],
        source_id: 'string',
      },
      {
        first_name: 'string',
        middle_name: 'string',
        last_name: 'string',
        preferred_name: 'string',
        emails: [
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
        ],
        phone_numbers: [
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
          { data: 'string', type: 'work' },
        ],
        gender: 'female',
        ethnicity: 'asian',
        dob: 'string',
        ssn: 'string',
        encrypted_ssn: 'string',
        residence: {
          line1: 'string',
          line2: 'string',
          city: 'string',
          state: 'string',
          postal_code: 'string',
          country: 'string',
          name: 'string',
          source_id: 'string',
        },
        title: 'string',
        manager: { id: 'string' },
        department: { name: 'string' },
        employment: { type: 'employee', subtype: 'full_time' },
        start_date: 'string',
        end_date: 'string',
        is_active: true,
        class_code: 'string',
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
        income: { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
        income_history: [
          { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
          { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
          { unit: 'yearly', amount: 0, currency: 'string', effective_date: 'string' },
        ],
        custom_fields: [
          { name: 'string', value: {} },
          { name: 'string', value: {} },
          { name: 'string', value: {} },
        ],
        source_id: 'string',
      },
    ]);
  });
});
