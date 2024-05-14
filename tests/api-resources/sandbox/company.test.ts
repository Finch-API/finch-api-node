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
      ein: 'string',
      entity: {},
      legal_name: 'string',
      locations: [{}, {}, {}],
      primary_email: 'string',
      primary_phone_number: 'string',
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
          routing_number: 'string',
          account_name: 'string',
          institution_name: 'string',
          account_type: 'checking',
          account_number: 'string',
        },
        {
          routing_number: 'string',
          account_name: 'string',
          institution_name: 'string',
          account_type: 'checking',
          account_number: 'string',
        },
        {
          routing_number: 'string',
          account_name: 'string',
          institution_name: 'string',
          account_type: 'checking',
          account_number: 'string',
        },
      ],
      departments: [
        { name: 'string', parent: { name: 'string' } },
        { name: 'string', parent: { name: 'string' } },
        { name: 'string', parent: { name: 'string' } },
      ],
      ein: 'string',
      entity: { type: 'llc', subtype: 's_corporation' },
      legal_name: 'string',
      locations: [
        {
          line1: 'string',
          line2: 'string',
          city: 'string',
          state: 'string',
          postal_code: 'string',
          country: 'string',
          name: 'string',
          source_id: 'string',
        },
        {
          line1: 'string',
          line2: 'string',
          city: 'string',
          state: 'string',
          postal_code: 'string',
          country: 'string',
          name: 'string',
          source_id: 'string',
        },
        {
          line1: 'string',
          line2: 'string',
          city: 'string',
          state: 'string',
          postal_code: 'string',
          country: 'string',
          name: 'string',
          source_id: 'string',
        },
      ],
      primary_email: 'string',
      primary_phone_number: 'string',
    });
  });
});
