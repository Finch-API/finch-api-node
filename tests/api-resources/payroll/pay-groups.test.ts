// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payGroups', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.payroll.payGroups.retrieve('pay_group_id', {
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.payroll.payGroups.retrieve('pay_group_id', {
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.payroll.payGroups.list({
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.payroll.payGroups.list({
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
      individual_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      pay_frequencies: ['string'],
    });
  });
});
