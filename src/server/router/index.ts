// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { goalRouter } from "./goal";
import { protectedExampleRouter } from "./protected-example-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("question.", protectedExampleRouter)
  .merge("goal.", goalRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
