// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';
import { Response } from 'node-fetch';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource individuals', () => {
  test('enrollMany: only required params', async () => {
    const responsePromise = client.hris.benefits.individuals.enrollMany('benefit_id', [{}]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enrollMany: required and optional params', async () => {
    const response = await client.hris.benefits.individuals.enrollMany('benefit_id', [
      {
        configuration: {
          employee_deduction: { type: 'percent', amount: 1000 },
          company_contribution: { type: 'percent', amount: 400 },
          catch_up: false,
          annual_maximum: 500000,
        },
        individual_id: 'd02a6346-1f08-4312-a064-49ff3cafaa7a',
      },
    ]);
  });

  test('enrolledIds', async () => {
    const responsePromise = client.hris.benefits.individuals.enrolledIds('benefit_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enrolledIds: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.benefits.individuals.enrolledIds('benefit_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('retrieveManyBenefits', async () => {
    const responsePromise = client.hris.benefits.individuals.retrieveManyBenefits('benefit_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveManyBenefits: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.benefits.individuals.retrieveManyBenefits('benefit_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('retrieveManyBenefits: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.benefits.individuals.retrieveManyBenefits(
        'benefit_id',
        { individual_ids: 'd675d2b7-6d7b-41a8-b2d3-001eb3fb88f6,d02a6346-1f08-4312-a064-49ff3cafaa7a' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('unenrollMany', async () => {
    const responsePromise = client.hris.benefits.individuals.unenrollMany('benefit_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unenrollMany: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.benefits.individuals.unenrollMany('benefit_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('unenrollMany: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.benefits.individuals.unenrollMany(
        'benefit_id',
        { individual_ids: ['string', 'string', 'string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
