import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  verbose: true,
  preset: 'jest-preset-angular',
  collectCoverage: true,
  coverageDirectory: './coverage',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  coveragePathIgnorePatterns: ['node_modules', 'test-config', 'interfaces', '.module.ts', '.router.ts', '.html', 'enum'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist/', '<rootDir>/src/test.ts', '<rootDir>/setup-jest.ts'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  moduleNameMapper: {
    '^@vissoto-angular/ui/(.*)$': '<rootDir>/projects/ui/$1',
  },
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    './**/*.ts': {
      branches: 75,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
export default config;
