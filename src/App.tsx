import "./App.css";
import Fetch from "./fetch";
import { worker } from "./mocks/browser";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Counter from "./components/Counter";
import Root from "./Root";
import Login from "./components/Login";

// In order for our mock definition to execute during the runtime, it needs to be imported into our application's code. However, since mocking is a development-oriented technique, we will be importing our src/mocks/browser.js file conditionally, depending on the current environment.
// It's not recommended to include Mock Service Worker in production. Doing so may lead to a distorted experience for your users.

if (process.env.NODE_ENV === "development") {
  worker.start();
}

function App() {
  const routesFromElement = createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route path="fetch" element={<Fetch />} />
        <Route path="counter" element={<Counter />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Route>
    </>
  );
  return createBrowserRouter(routesFromElement);
}

export default App;
