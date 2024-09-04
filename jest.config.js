module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@api(.*)$': '<rootDir>/src/api/$1',
    '@const(.*)$': '<rootDir>/src/constants/$1',
    '@theme(.*)$': '<rootDir>/src/theme/$1',
    '@component(.*)$': '<rootDir>/src/components/$1',
    '@utils(.*)$': '<rootDir>/src/utils/$1',
    '@assets(.*)$': '<rootDir>/src/assets/$1',
  },
}
