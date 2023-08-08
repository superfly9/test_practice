import { setupServer } from "msw/lib/node";
import { handlers } from "./handler";

// This function is designed for NodeJS environment. If looking for a way to apply API mocking in a browser environment, consider using setupWorker instead.
// create server instance
// A function that sets up a request interception layer in NodeJS environment.
export const server = setupServer(...handlers)


// It's recommended to configure API mocking as a part of your tests setup, 
// so that your tests don't have to reference any mocking during their runs, 
// focusing on testing what matters.

// Typically, setupServer is used for unit and integration tests, however, it will run in any NodeJS process.

