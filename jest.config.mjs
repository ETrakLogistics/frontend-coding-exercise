const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    "<rootDir>/test/setup.ts"
  ]
};

export default config;
