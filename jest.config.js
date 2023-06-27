/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^@tryfinch/finch-api/_shims/(.*)$': '<rootDir>/_shims/$1.node',
  },
  modulePathIgnorePatterns: ['<rootDir>/ecosystem-tests/'],
};
