// File generated from our OpenAPI spec by Stainless.

import { Headers } from '~/core';
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

  test('defaultHeaders are passed through', () => {
    const client = new Finch({
      defaultHeaders: { 'X-My-Default-Header': '2' },
      accessToken: 'my access token',
    });

    const { req } = client.buildRequest({ path: '/foo', method: 'post' });
    expect((req.headers as Headers)['X-My-Default-Header']).toEqual('2');
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Finch({
        baseURL: 'http://localhost:5000/custom/path/',
        accessToken: 'my access token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Finch({
        baseURL: 'http://localhost:5000/custom/path',
        accessToken: 'my access token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });
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
