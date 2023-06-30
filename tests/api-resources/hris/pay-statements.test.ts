// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource payStatements', () => {
  test('retrieveMany: only required params', async () => {
    const response = await finch.hris.payStatements.retrieveMany({
      requests: [
        { payment_id: 'e8b90071-0c11-471c-86e8-e303ef2f6782' },
        { payment_id: 'e8b90071-0c11-471c-86e8-e303ef2f6782' },
        { payment_id: 'e8b90071-0c11-471c-86e8-e303ef2f6782' },
      ],
    });
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
