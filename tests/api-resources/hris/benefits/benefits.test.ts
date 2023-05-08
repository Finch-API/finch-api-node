// File generated from our OpenAPI spec by Stainless.

import Finch from '~/index';

const finch = new Finch({ accessToken: 'something1234', baseURL: 'http://127.0.0.1:4010' });

describe('resource benefits', () => {
  test('create', async () => {
    const response = await finch.hris.benefits.create();
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(finch.hris.benefits.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.hris.benefits.create(
        { description: 'string', frequency: 'one_time', type: '401k' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('retrieve', async () => {
    const response = await finch.hris.benefits.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.hris.benefits.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('update', async () => {
    const response = await finch.hris.benefits.update('string');
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(finch.hris.benefits.update('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.hris.benefits.update('string', { description: 'string' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('list', async () => {
    const response = await finch.hris.benefits.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(finch.hris.benefits.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Finch.NotFoundError,
    );
  });

  test('listSupportedBenefits', async () => {
    const response = await finch.hris.benefits.listSupportedBenefits();
  });

  test('listSupportedBenefits: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      finch.hris.benefits.listSupportedBenefits({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
