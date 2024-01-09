// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payment', () => {
  test('create', async () => {
    const responsePromise = finch.sandbox.payment.create();
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
    await expect(finch.sandbox.payment.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.sandbox.payment.create(
        {
          end_date: 'string',
          pay_statements: [
            {
              individual_id: 'b2338cfb-472f-4f72-9faa-e028c083144a',
              type: 'regular_payroll',
              payment_method: 'check',
              total_hours: 0,
              gross_pay: { amount: 0, currency: 'string' },
              net_pay: { amount: 0, currency: 'string' },
              earnings: [
                { type: 'salary', name: 'string', amount: 0, currency: 'string', hours: 0 },
                { type: 'salary', name: 'string', amount: 0, currency: 'string', hours: 0 },
                { type: 'salary', name: 'string', amount: 0, currency: 'string', hours: 0 },
              ],
              taxes: [
                { type: 'state', name: 'string', employer: true, amount: 0, currency: 'string' },
                { type: 'state', name: 'string', employer: true, amount: 0, currency: 'string' },
                { type: 'state', name: 'string', employer: true, amount: 0, currency: 'string' },
              ],
              employee_deductions: [
                { name: '401k test', amount: 2000, currency: 'usd', pre_tax: true, type: '401k' },
              ],
              employer_contributions: [
                { name: 'string', amount: 0, currency: 'string', type: '401k' },
                { name: 'string', amount: 0, currency: 'string', type: '401k' },
                { name: 'string', amount: 0, currency: 'string', type: '401k' },
              ],
            },
          ],
          start_date: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
