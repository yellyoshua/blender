// Jest config

module.exports = {
  roots: ['<rootDir>/src/database/migrations/'],
  setupFiles: [
    '<rootDir>/jest/globals-setup.js'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/jest/'
  ],
  testTimeout: 15000
};
