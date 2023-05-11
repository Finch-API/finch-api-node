// File generated from our OpenAPI spec by Stainless.

import Finch from '../index';

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  test('maxRetries option is correctly set', () => {
    const client = new Finch({ maxRetries: 1, accessToken: 'my access token' });
    expect(client.maxRetries).toEqual(1);

    // default
    const client2 = new Finch({ accessToken: 'my access token' });
    expect(client2.maxRetries).toEqual(2);
  });

  test('with accessToken argument', () => {
    const client = new Finch({ accessToken: 'another access token' });
    expect(client.accessToken).toBe('another access token');
  });

  test('with options argument', () => {
    // accessToken
    const client = new Finch({ accessToken: 'my access token' });
    expect(client.accessToken).toBe('my access token');
  });

  test('with disabled authentication', () => {
    const client = new Finch({ accessToken: null });
    expect(client.accessToken).toBeNull();
  });
});
