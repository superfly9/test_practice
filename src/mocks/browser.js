//  create a worker instance with our request handlers defined earlier.
import { setupWorker } from 'msw'
import { handlers } from './handler'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)


// start worker
// Any requests that match previously defined handlers will now be intercepted and mocked.

