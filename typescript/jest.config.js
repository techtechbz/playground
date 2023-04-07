module.exports = {
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleNameMapper: {
    '^@/grammer/(.*)$': '<rootDir>/1_basic-grammer/$1'
  }
}