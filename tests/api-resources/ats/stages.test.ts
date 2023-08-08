// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource stages', () => {
  test('list', async () => {
    const responsePromise = finch.ats.stages.list();
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
    await expect(finch.ats.stages.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });
});
