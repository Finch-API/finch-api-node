// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource candidates', () => {
  test('retrieve', async () => {
    const response = await finch.ats.candidates.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.ats.candidates.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('list', async () => {
    const response = await finch.ats.candidates.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(finch.ats.candidates.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.ats.candidates.list({ limit: 0, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
