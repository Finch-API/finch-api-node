// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.hris.company.payStatementItem.rules.create({
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
    const response = await client.hris.company.payStatementItem.rules.create({
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
      attributes: { metadata: { foo: 'bar' } },
      conditions: [{ field: 'field', operator: 'equals', value: 'value' }],
      effective_end_date: 'effective_end_date',
      effective_start_date: 'effective_start_date',
      entity_type: 'pay_statement_item',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.hris.company.payStatementItem.rules.update('rule_id', {
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
    const response = await client.hris.company.payStatementItem.rules.update('rule_id', {
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
      optionalProperty: {},
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.hris.company.payStatementItem.rules.list({
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
    const response = await client.hris.company.payStatementItem.rules.list({
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.hris.company.payStatementItem.rules.delete('rule_id', {
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

  test('delete: required and optional params', async () => {
    const response = await client.hris.company.payStatementItem.rules.delete('rule_id', {
      entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
  });
});
