// File generated from our OpenAPI spec by Stainless.

import Finch from '@tryfinch/finch-api';

const finch = new Finch({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  const payload = `{"company_id":"720be419-0293-4d32-a707-32179b0827ab"}`;
  const signature = 'm7y0TV2C+hlHxU42wCieApTSTaA8/047OAplBqxIV/s=';
  const timestamp = '1676312382';
  const headers = {
    'finch-event-id': 'msg_2Lh9KRb0pzN4LePd3XiA4v12Axj',
    'finch-timestamp': timestamp,
    'finch-signature': `v1,${signature}`,
  };
  const secret = '5WbX5kEWLlfzsGNjH64I8lOOqUB6e8FH';
  const fakeNow = parseFloat(timestamp) * 1000;

  beforeEach(() => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => fakeNow);
  });

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  describe('unwrap', () => {
    it('deserializes the payload object', () => {
      finch.webhooks.unwrap(payload, headers, secret);
    });
  });

  describe('verifySignature', () => {
    it('should pass for valid signature', () => {
      finch.webhooks.verifySignature(payload, headers, secret);
    });

    it('should throw for timestamp outside threshold', () => {
      jest.spyOn(global.Date, 'now').mockImplementation(() => fakeNow + 360000); // 6 minutes
      expect(() =>
        finch.webhooks.verifySignature(payload, headers, secret),
      ).toThrowErrorMatchingInlineSnapshot(`"Webhook timestamp is too old"`);

      jest.spyOn(global.Date, 'now').mockImplementation(() => fakeNow - 360000); // 6 minutes
      expect(() =>
        finch.webhooks.verifySignature(payload, headers, secret),
      ).toThrowErrorMatchingInlineSnapshot(`"Webhook timestamp is too new"`);
    });

    it('should throw an error for invalid secret format', () => {
      expect(() => {
        finch.webhooks.verifySignature(payload, headers, 'invalid secret');
      }).toThrowErrorMatchingInlineSnapshot(`"Given secret is not valid"`);
    });

    it('should throw for invalid signature', () => {
      expect(() =>
        finch.webhooks.verifySignature(payload, headers, Buffer.from('foo').toString('base64')),
      ).toThrowErrorMatchingInlineSnapshot(
        `"None of the given webhook signatures match the expected signature"`,
      );
    });

    it('should pass for multiple signatures', () => {
      const invalidSignature = Buffer.from('my_sig').toString('base64');
      finch.webhooks.verifySignature(
        payload,
        {
          ...headers,
          'finch-signature': `v1,${invalidSignature} v1,${signature}`,
        },
        secret,
      );
    });

    it('should throw for invalid timestamp', () => {
      expect(() =>
        finch.webhooks.verifySignature(
          payload,
          {
            ...headers,
            'finch-timestamp': 'nan',
          },
          secret,
        ),
      ).toThrowErrorMatchingInlineSnapshot(`"Invalid timestamp header: nan"`);
    });

    it('should throw for different signature version', () => {
      expect(() =>
        finch.webhooks.verifySignature(
          payload,
          {
            ...headers,
            'finch-signature': `v2,${signature}`,
          },

          secret,
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `"None of the given webhook signatures match the expected signature"`,
      );
    });

    it('should pass for multiple signatures with different version', () => {
      finch.webhooks.verifySignature(
        payload,
        {
          ...headers,
          'finch-signature': `v2,${signature} v1,${signature}`,
        },
        secret,
      );
    });

    it('should throw if signature version is missing', () => {
      expect(() =>
        finch.webhooks.verifySignature(
          payload,
          {
            ...headers,
            'finch-signature': signature,
          },

          secret,
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `"None of the given webhook signatures match the expected signature"`,
      );
    });

    it('should throw if payload is not a string', () => {
      expect(() =>
        finch.webhooks.verifySignature({ payload: 'not a string' } as any, headers, secret),
      ).toThrowErrorMatchingInlineSnapshot(
        `"Webhook body must be passed as the raw JSON string sent from the server (do not parse it first)."`,
      );
    });
  });
});
