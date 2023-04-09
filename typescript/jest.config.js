module.exports = {
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleNameMapper: {
    '^@/grammar/(.*)$': '<rootDir>/basic_grammar/$1'
  }
}