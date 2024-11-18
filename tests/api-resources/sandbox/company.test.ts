// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource company', () => {
  test('update: only required params', async () => {
    const responsePromise = client.sandbox.company.update({
      accounts: [{}],
      departments: [{}],
      ein: 'ein',
      entity: {},
      legal_name: 'legal_name',
      locations: [{}],
      primary_email: 'primary_email',
      primary_phone_number: 'primary_phone_number',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.sandbox.company.update({
      accounts: [
        {
          account_name: 'account_name',
          account_number: 'account_number',
          account_type: 'checking',
          institution_name: 'institution_name',
          routing_number: 'routing_number',
        },
      ],
      departments: [{ name: 'name', parent: { name: 'name' } }],
      ein: 'ein',
      entity: { subtype: 's_corporation', type: 'llc' },
      legal_name: 'legal_name',
      locations: [
        {
          city: 'city',
          country: 'country',
          line1: 'line1',
          line2: 'line2',
          name: 'name',
          postal_code: 'postal_code',
          source_id: 'source_id',
          state: 'state',
        },
      ],
      primary_email: 'primary_email',
      primary_phone_number: 'primary_phone_number',
    });
  });
});
