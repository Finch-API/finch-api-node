// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource individuals', () => {
  test('retrieveMany', async () => {
    const response = await finch.hris.individuals.retrieveMany();
  });

  test('retrieveMany: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(finch.hris.individuals.retrieveMany({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });

  test('retrieveMany: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.hris.individuals.retrieveMany(
        {
          options: { include: ['string', 'string', 'string'] },
          requests: [{ individual_id: 'string' }, { individual_id: 'string' }, { individual_id: 'string' }],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
