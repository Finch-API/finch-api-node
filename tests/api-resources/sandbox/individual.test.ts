// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource individual', () => {
  test('update', async () => {
    const responsePromise = client.sandbox.individual.update('individual_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandbox.individual.update(
        'individual_id',
        {
          dob: 'dob',
          emails: [{ data: 'data', type: 'work' }],
          encrypted_ssn: 'encrypted_ssn',
          ethnicity: 'asian',
          first_name: 'first_name',
          gender: 'female',
          last_name: 'last_name',
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
          ssn: 'ssn',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
