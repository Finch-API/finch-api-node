/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@tryfinch/finch-api$': '<rootDir>/src/index.ts',
    '^@tryfinch/finch-api/_shims/(.*)$': '<rootDir>/src/_shims/$1.node',
    '^@tryfinch/finch-api/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/ecosystem-tests/', '<rootDir>/dist/'],
};
