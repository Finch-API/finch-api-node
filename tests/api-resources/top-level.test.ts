// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Finch from '@tryfinch/finch-api';

const finch = new Finch({
  accessToken: 'My Access Token',
  clientId: '4ab15e51-11ad-49f4-acae-f343b7794375',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  test('getAccessToken with redirect', async () => {
    const response = await finch.getAccessToken('my-authorization-code', { redirectUri: '/my-app/redirect' });
  });

  test('getAccessToken without redirect', async () => {
    const response = await finch.getAccessToken('my-authorization-code');
  });

  test('getAuthUrl', async () => {
    // TODO
  });
});
