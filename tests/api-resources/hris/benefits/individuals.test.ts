// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';

const client = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource individuals', () => {
  test('enrollMany', async () => {
    const responsePromise = client.hris.benefits.individuals.enrollMany('benefit_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enrollMany: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.benefits.individuals.enrollMany(
        'benefit_id',
        {
          entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
          individuals: [
            {
              configuration: {
                annual_contribution_limit: 'individual',
                annual_maximum: null,
                catch_up: true,
                company_contribution: { amount: 0, tiers: [{ match: 0, threshold: 0 }], type: 'fixed' },
                effective_date: '2019-12-27',
                employee_deduction: { amount: 10000, type: 'fixed' },
              },
              individual_id: 'd02a6346-1f08-4312-a064-49ff3cafaa7a',
            },
          ],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });

  test('enrolledIDs', async () => {
    const responsePromise = client.hris.benefits.individuals.enrolledIDs('benefit_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enrolledIDs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.benefits.individuals.enrolledIDs(
        'benefit_id',
        { entity_ids: ['550e8400-e29b-41d4-a716-446655440000'] },
        { path: '/_stainless_unknown_path' },
      ),
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

  test('retrieveManyBenefits: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.benefits.individuals.retrieveManyBenefits(
        'benefit_id',
        {
          entity_ids: ['550e8400-e29b-41d4-a716-446655440000'],
          individual_ids: 'd675d2b7-6d7b-41a8-b2d3-001eb3fb88f6,d02a6346-1f08-4312-a064-49ff3cafaa7a',
        },
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

  test('unenrollMany: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.hris.benefits.individuals.unenrollMany(
        'benefit_id',
        { entity_ids: ['550e8400-e29b-41d4-a716-446655440000'], individual_ids: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Finch.NotFoundError);
  });
});
