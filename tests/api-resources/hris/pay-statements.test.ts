// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const finch = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payStatements', () => {
  test('retrieveMany: only required params', async () => {
    const responsePromise = finch.hris.payStatements.retrieveMany({
      requests: [
        { payment_id: 'e8b90071-0c11-471c-86e8-e303ef2f6782' },
        { payment_id: 'e8b90071-0c11-471c-86e8-e303ef2f6782' },
        { payment_id: 'e8b90071-0c11-471c-86e8-e303ef2f6782' },
      ],
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
    const response = await finch.hris.payStatements.retrieveMany({
      requests: [
        { payment_id: 'e8b90071-0c11-471c-86e8-e303ef2f6782', limit: 0, offset: 0 },
        { payment_id: 'e8b90071-0c11-471c-86e8-e303ef2f6782', limit: 0, offset: 0 },
        { payment_id: 'e8b90071-0c11-471c-86e8-e303ef2f6782', limit: 0, offset: 0 },
      ],
    });
  });
});
