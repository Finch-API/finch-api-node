// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payment', () => {
  test('create', async () => {
    const responsePromise = client.sandbox.payment.create();
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
    await expect(client.sandbox.payment.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandbox.payment.create(
        {
          end_date: 'end_date',
          pay_statements: [
            {
              earnings: [
                { amount: 0, currency: 'currency', hours: 0, name: 'name', type: 'salary' },
                { amount: 0, currency: 'currency', hours: 0, name: 'name', type: 'salary' },
                { amount: 0, currency: 'currency', hours: 0, name: 'name', type: 'salary' },
              ],
              employee_deductions: [
                { amount: 2000, currency: 'usd', name: '401k test', pre_tax: true, type: '401k' },
              ],
              employer_contributions: [
                { amount: 0, currency: 'currency', name: 'name', type: '401k' },
                { amount: 0, currency: 'currency', name: 'name', type: '401k' },
                { amount: 0, currency: 'currency', name: 'name', type: '401k' },
              ],
              gross_pay: { amount: 0, currency: 'currency' },
              individual_id: 'b2338cfb-472f-4f72-9faa-e028c083144a',
              net_pay: { amount: 0, currency: 'currency' },
              payment_method: 'check',
              taxes: [
                { amount: 0, currency: 'currency', employer: true, name: 'name', type: 'state' },
                { amount: 0, currency: 'currency', employer: true, name: 'name', type: 'state' },
                { amount: 0, currency: 'currency', employer: true, name: 'name', type: 'state' },
              ],
              total_hours: 0,
              type: 'regular_payroll',
            },
          ],
          start_date: 'start_date',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
