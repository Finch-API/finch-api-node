// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource individuals', () => {
  test('retrieveMany', async () => {
    const responsePromise = finch.hris.individuals.retrieveMany();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
