// File generated from our OpenAPI spec by Stainless.

import Finch from '~/index';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource company', () => {
  test('retrieve', async () => {
    const response = await finch.hris.company.retrieve();
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(finch.hris.company.retrieve({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });
});
