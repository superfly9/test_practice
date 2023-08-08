import './App.css';
import Fetch from './fetch';
import { worker } from './mocks/browser';

// In order for our mock definition to execute during the runtime, it needs to be imported into our application's code. However, since mocking is a development-oriented technique, we will be importing our src/mocks/browser.js file conditionally, depending on the current environment.
// It's not recommended to include Mock Service Worker in production. Doing so may lead to a distorted experience for your users.

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

function App() {
  return (
  <Fetch url="/greeting" />
  );
}

export default App;
