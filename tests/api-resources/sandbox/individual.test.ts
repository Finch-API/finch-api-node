// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  clientId: '4ab15e51-11ad-49f4-acae-f343b7794375',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource individual', () => {
  test('update', async () => {
    const responsePromise = finch.sandbox.individual.update('string');
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
      finch.sandbox.individual.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.sandbox.individual.update(
        'string',
        {
          dob: '12/20/1989',
          emails: [
            { data: 'string', type: 'work' },
            { data: 'string', type: 'work' },
            { data: 'string', type: 'work' },
          ],
          encrypted_ssn: 'string',
          ethnicity: 'asian',
          first_name: 'string',
          gender: 'female',
          last_name: 'string',
          middle_name: 'string',
          phone_numbers: [
            { data: 'string', type: 'work' },
            { data: 'string', type: 'work' },
            { data: 'string', type: 'work' },
          ],
          preferred_name: 'string',
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
          ssn: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
