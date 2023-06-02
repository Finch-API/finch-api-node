// File generated from our OpenAPI spec by Stainless.

import Finch from '~/index';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource individuals', () => {
  test('enrollMany: only required params', async () => {
    const response = await finch.hris.benefits.individuals.enrollMany('string', [{}, {}, {}]);
  });

  test('enrollMany: required and optional params', async () => {
    const response = await finch.hris.benefits.individuals.enrollMany('string', [
      { individual_id: 'string' },
      { individual_id: 'string' },
      { individual_id: 'string' },
    ]);
  });

  test('enrolledIds', async () => {
    const response = await finch.hris.benefits.individuals.enrolledIds('string');
  });

  test('enrolledIds: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.hris.benefits.individuals.enrolledIds('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('retrieveManyBenefits', async () => {
    const response = await finch.hris.benefits.individuals.retrieveManyBenefits('string');
  });

  test('retrieveManyBenefits: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.hris.benefits.individuals.retrieveManyBenefits('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('retrieveManyBenefits: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.hris.benefits.individuals.retrieveManyBenefits(
        'string',
        { individual_ids: 'd675d2b7-6d7b-41a8-b2d3-001eb3fb88f6,d02a6346-1f08-4312-a064-49ff3cafaa7a' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('unenroll', async () => {
    const response = await finch.hris.benefits.individuals.unenroll('string');
  });

  test('unenroll: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.hris.benefits.individuals.unenroll('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('unenroll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.hris.benefits.individuals.unenroll(
        'string',
        { individual_ids: ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
