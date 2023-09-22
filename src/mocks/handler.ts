import { rest } from "msw";

//  rest API
// The way we mock an API with Mock Service Worker resembles how that API is being used in an actual application.
// API REQUEST HANDLER  - rest[method](url, RESPONSE RESOLVER)

// same request handler can be shared between browser and node
// Since Service Workers cannot run in Node, the integration process is different depending on the environment.
export const handlers = [
  // Handles a POST /login request
  rest.post("/login", (req, res, ctx) => {
    // Response resolver - accepts req,res,ctx
    // To respond to an intercepted request we have to specify a mocked response using a response resolver function.
    // ctx: group of functions that help set status code, headers, body,json...
    sessionStorage.setItem("is-authenticated", "true");
    return res(ctx.status(200));
  }),

  // Handles a GET /user request
  rest.get("/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not Authorized",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: "CHAN",
      })
    );
  }),

  rest.get("/greeting", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: { greeting: "hello there" },
      })
    );
  }),
];

//npx msw init public/ --save => public에 mockServiceWorker.js 생성해줌
