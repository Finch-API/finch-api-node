import { toBase64 } from '@tryfinch/finch-api/core';

describe('toBase64', () => {
  const testCases = [
    {
      input: 'hello world',
      expected: 'aGVsbG8gd29ybGQ=',
    },
    {
      input: new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]),
      expected: 'aGVsbG8gd29ybGQ=',
    },
    {
      input: undefined,
      expected: '',
    },
  ];
  describe('with Buffer', () => {
    test('it converts to base64', async () => {
      testCases.forEach(({ input, expected }) => {
        expect(toBase64(input)).toBe(expected);
      });
    });
  });

  describe('without buffer', () => {
    let originalBuffer: BufferConstructor;
    beforeAll(() => {
      originalBuffer = globalThis.Buffer;
      // @ts-expect-error Can't assign undefined to BufferConstructor
      globalThis.Buffer = undefined;
    });
    afterAll(() => {
      globalThis.Buffer = originalBuffer;
    });

    test('it converts to base64', async () => {
      testCases.forEach(({ input, expected }) => {
        expect(toBase64(input)).toBe(expected);
      });
    });
  });
});
