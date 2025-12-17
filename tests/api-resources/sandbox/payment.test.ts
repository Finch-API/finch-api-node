// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';

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

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sandbox.payment.create(
        {
          end_date: '2019-12-27',
          pay_statements: [
            {
              individual_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              earnings: [{ amount: 0, hours: 0, name: 'x', type: 'bonus' }],
              employee_deductions: [{ amount: 0, name: 'x', pre_tax: true, type: '457' }],
              employer_contributions: [{ amount: 0, name: 'x', type: '457' }],
              gross_pay: 1,
              net_pay: 9007199254740991,
              payment_method: 'check',
              taxes: [{ amount: 0, employer: true, name: 'x', type: 'federal' }],
              total_hours: 1,
              type: 'off_cycle_payroll',
            },
          ],
          start_date: '2019-12-27',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
