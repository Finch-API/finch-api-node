// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource payments', () => {
  test('list: only required params', async () => {
    const response = await finch.hris.payments.list({ end_date: '2021-01-01', start_date: '2021-01-01' });
  });

  test('list: required and optional params', async () => {
    const response = await finch.hris.payments.list({ end_date: '2021-01-01', start_date: '2021-01-01' });
  });
});
