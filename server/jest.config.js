// Jest config

module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: [
    '<rootDir>/jest/globals-setup.js'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/jest/',
    '/src/database/migrations/'
  ],
  testTimeout: 15000
};
