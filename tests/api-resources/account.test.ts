// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource account', () => {
  test('disconnect', async () => {
    const response = await finch.account.disconnect();
  });

  test('disconnect: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(finch.account.disconnect({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });

  test('introspect', async () => {
    const response = await finch.account.introspect();
  });

  test('introspect: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(finch.account.introspect({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });
});
