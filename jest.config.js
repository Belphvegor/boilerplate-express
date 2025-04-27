module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/prisma/']
};
