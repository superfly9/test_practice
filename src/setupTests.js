// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server.ts";
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

// You can use the same code as above in a single test suite, if you don't wish to establish API mocking on the global level.

// Since API mocking has been established in the tests setup, each test suite doesn't need any extra adjustments to intercept and mock API requests according to your handlers.

// setupTest.js => setupFilesAfterEnv처럼 사용되는 파일
