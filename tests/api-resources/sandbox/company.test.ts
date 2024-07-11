// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  clientId: '4ab15e51-11ad-49f4-acae-f343b7794375',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource company', () => {
  test('update: only required params', async () => {
    const responsePromise = finch.sandbox.company.update({
      accounts: [{}, {}, {}],
      departments: [{}, {}, {}],
      ein: 'ein',
      entity: {},
      legal_name: 'legal_name',
      locations: [{}, {}, {}],
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
    const response = await finch.sandbox.company.update({
      accounts: [
        {
          routing_number: 'routing_number',
          account_name: 'account_name',
          institution_name: 'institution_name',
          account_type: 'checking',
          account_number: 'account_number',
        },
        {
          routing_number: 'routing_number',
          account_name: 'account_name',
          institution_name: 'institution_name',
          account_type: 'checking',
          account_number: 'account_number',
        },
        {
          routing_number: 'routing_number',
          account_name: 'account_name',
          institution_name: 'institution_name',
          account_type: 'checking',
          account_number: 'account_number',
        },
      ],
      departments: [
        { name: 'name', parent: { name: 'name' } },
        { name: 'name', parent: { name: 'name' } },
        { name: 'name', parent: { name: 'name' } },
      ],
      ein: 'ein',
      entity: { type: 'llc', subtype: 's_corporation' },
      legal_name: 'legal_name',
      locations: [
        {
          line1: 'line1',
          line2: 'line2',
          city: 'city',
          state: 'state',
          postal_code: 'postal_code',
          country: 'country',
          name: 'name',
          source_id: 'source_id',
        },
        {
          line1: 'line1',
          line2: 'line2',
          city: 'city',
          state: 'state',
          postal_code: 'postal_code',
          country: 'country',
          name: 'name',
          source_id: 'source_id',
        },
        {
          line1: 'line1',
          line2: 'line2',
          city: 'city',
          state: 'state',
          postal_code: 'postal_code',
          country: 'country',
          name: 'name',
          source_id: 'source_id',
        },
      ],
      primary_email: 'primary_email',
      primary_phone_number: 'primary_phone_number',
    });
  });
});
