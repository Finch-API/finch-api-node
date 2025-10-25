// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource benefits', () => {
  test('create: only required params', async () => {
    const responsePromise = client.hris.benefits.create({
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

  test('create: required and optional params', async () => {
    const response = await client.hris.benefits.create({
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
      company_contribution: { tiers: [{ match: 1, threshold: 1 }], type: 'match' },
      description: 'description',
      frequency: 'every_paycheck',
      type: '457',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.hris.benefits.retrieve('benefit_id', {
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
    const response = await client.hris.benefits.retrieve('benefit_id', {
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.hris.benefits.update('benefit_id', {
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

  test('update: required and optional params', async () => {
    const response = await client.hris.benefits.update('benefit_id', {
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
      description: 'description',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.hris.benefits.list({
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
    const response = await client.hris.benefits.list({
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });

  test('listSupportedBenefits: only required params', async () => {
    const responsePromise = client.hris.benefits.listSupportedBenefits({
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

  test('listSupportedBenefits: required and optional params', async () => {
    const response = await client.hris.benefits.listSupportedBenefits({
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });
});
