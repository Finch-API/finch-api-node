import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@tryfinch/finch-api$': '<rootDir>/src/index.ts',
    '^@tryfinch/finch-api/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^@tryfinch/finch-api/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
};

export default config;
