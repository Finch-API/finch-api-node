import { fromBase64, toBase64 } from '@tryfinch/finch-api/core';

describe.each([true, false])('with Buffer (Buffer is %s)', (buffer) => {
  let originalBuffer: BufferConstructor;
  beforeAll(() => {
    if (!buffer) {
      originalBuffer = globalThis.Buffer;
      // @ts-expect-error Can't assign undefined to BufferConstructor
      // delete
      delete globalThis.Buffer;
    }
  });
  afterAll(() => {
    if (!buffer) {
      globalThis.Buffer = originalBuffer;
    }
  });
  test('toBase64', () => {
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
      {
        expected: '5WbX5kEWLlfzsGNjH64I8lOOqUB6e8FH',
        input: new Uint8Array([
          229, 102, 215, 230, 65, 22, 46, 87, 243, 176, 99, 99, 31, 174, 8, 242, 83, 142, 169, 64, 122, 123,
          193, 71,
        ]),
      },
    ];

    testCases.forEach(({ input, expected }) => {
      expect(toBase64(input)).toBe(expected);
    });
  });

  test('fromBase64', () => {
    const testCases = [
      {
        input: 'aGVsbG8gd29ybGQ=',
        expected: new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]),
      },
      {
        input: '',
        expected: new Uint8Array([]),
      },
      {
        input: '5WbX5kEWLlfzsGNjH64I8lOOqUB6e8FH',
        expected: new Uint8Array([
          229, 102, 215, 230, 65, 22, 46, 87, 243, 176, 99, 99, 31, 174, 8, 242, 83, 142, 169, 64, 122, 123,
          193, 71,
        ]),
      },
    ];

    testCases.forEach(({ input, expected }) => {
      expect(fromBase64(input)).toEqual(expected);
    });
  });
});
