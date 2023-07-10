// File generated from our OpenAPI spec by Stainless.

import { Headers } from '@tryfinch/finch-api/core';
import Finch from '@tryfinch/finch-api';
import { Response } from '@tryfinch/finch-api/_shims/fetch';

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

  describe('defaultHeaders', () => {
    const client = new Finch({
      baseURL: 'http://localhost:5000/',
      defaultHeaders: { 'X-My-Default-Header': '2' },
      accessToken: 'my access token',
    });

    test('they are used in the request', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post' });
      expect((req.headers as Headers)['X-My-Default-Header']).toEqual('2');
    });

    test('can be overriden with `undefined`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect((req.headers as Headers)['X-My-Default-Header']).toBeUndefined();
    });

    test('can be overriden with `null`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect((req.headers as Headers)['X-My-Default-Header']).toBeUndefined();
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Finch({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        accessToken: 'my access token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Finch({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        accessToken: 'my access token',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Finch({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        accessToken: 'my access token',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new Finch({
      baseURL: 'http://localhost:5000/',
      accessToken: 'my access token',
      fetch: (url) => {
        return Promise.resolve(
          new Response(JSON.stringify({ url, custom: true }), {
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      },
    });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
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

describe('request building', () => {
  const client = new Finch({ accessToken: 'my access token' });

  describe('Content-Length', () => {
    test('handles multi-byte characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: '—' } });
      expect((req.headers as Record<string, string>)['Content-Length']).toEqual('20');
    });

    test('handles standard characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: 'hello' } });
      expect((req.headers as Record<string, string>)['Content-Length']).toEqual('22');
    });
  });
});
