const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle CSS imports (tailwind etc.)
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
  // Swiper CSS specific patterns mapped to empty object
  '^swiper/css$': '<rootDir>/__mocks__/styleMock.js',
  '^swiper/css/.*$': '<rootDir>/__mocks__/styleMock.js',
  },
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'pages/**/*.{js,jsx}',
    'variants.js',
    '!pages/_app.js',
    '!pages/_document.js',
  ],
};

module.exports = createJestConfig(customJestConfig);
