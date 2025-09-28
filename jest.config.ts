import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',

  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  }
 ,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 
  // Optional: for @testing-library/jest-dom
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // moduleNameMapper: {
  //   '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Optional: for CSS module support
  // },
   
  moduleNameMapper: {
    // Mock للصور والستايلز
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  
};

export default config; 