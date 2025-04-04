// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('create', async () => {
    const responsePromise = client.hris.company.payStatementItem.rules.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.company.payStatementItem.rules.create({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.company.payStatementItem.rules.create(
        {
          attributes: { metadata: { foo: 'bar' } },
          conditions: [{ field: 'field', operator: 'equals', value: 'value' }],
          effective_end_date: 'effective_end_date',
          effective_start_date: 'effective_start_date',
          entity_type: 'pay_statement_item',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.hris.company.payStatementItem.rules.update('rule_id');
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
      client.hris.company.payStatementItem.rules.update('rule_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.company.payStatementItem.rules.update(
        'rule_id',
        { optionalProperty: {} },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.hris.company.payStatementItem.rules.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.company.payStatementItem.rules.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.hris.company.payStatementItem.rules.delete('rule_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.company.payStatementItem.rules.delete('rule_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
