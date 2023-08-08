// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource employmentData', () => {
  test('retrieveMany: only required params', async () => {
    const responsePromise = finch.hris.individuals.employmentData.retrieveMany({
      requests: [{ individual_id: 'string' }, { individual_id: 'string' }, { individual_id: 'string' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveMany: required and optional params', async () => {
    const response = await finch.hris.individuals.employmentData.retrieveMany({
      requests: [{ individual_id: 'string' }, { individual_id: 'string' }, { individual_id: 'string' }],
    });
  });
});
