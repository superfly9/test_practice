module.exports = {
    preset: 'babel-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.js?$': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };