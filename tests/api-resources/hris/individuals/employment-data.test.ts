// File generated from our OpenAPI spec by Stainless.

import Finch from '~/index';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource employmentData', () => {
  test('retrieveMany: only required params', async () => {
    const response = await finch.hris.individuals.employmentData.retrieveMany({
      requests: [{ individual_id: 'string' }, { individual_id: 'string' }, { individual_id: 'string' }],
    });
  });

  test('retrieveMany: required and optional params', async () => {
    const response = await finch.hris.individuals.employmentData.retrieveMany({
      requests: [{ individual_id: 'string' }, { individual_id: 'string' }, { individual_id: 'string' }],
    });
  });
});
