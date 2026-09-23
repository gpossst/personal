import { createStart, createCsrfMiddleware } from "@tanstack/react-start";
import { logMiddleware } from "./utils/loggingMiddleware";

const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  requestMiddleware: [csrfMiddleware],
  functionMiddleware: [logMiddleware],
}));
