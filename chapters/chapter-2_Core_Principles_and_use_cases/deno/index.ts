// @ts-ignore
import { listenAndServe } from "https://deno.land/std@0.88.0/http/server.ts";

const serverConfig = {
  port: 8000,
};

listenAndServe(serverConfig, (req) => {
  req.respond({ body: "Hello World\n" });
});

console.info(`Server started at http://localhost:8000`);
