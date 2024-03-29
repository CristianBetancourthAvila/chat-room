process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';
require('react-scripts/config/env');

const path = require('path');
const createJestConfig = require('react-scripts/scripts/utils/createJestConfig');

module.exports = {
  ...createJestConfig(
    relativePath => require.resolve(path.join('react-scripts', relativePath)),
    __dirname,
    false,
  ),
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/mocks/**',
    '!src/serviceWorker.js',
    '!**/index.js',
  ],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  coverageReporters: ['text', 'jest-junit'],
  timers: 'modern',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'coverage', outputName: 'test-report.xml' }],
  ],
};
