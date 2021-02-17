import { triggerNotification } from "./duckTyping";
import { isObject } from "./jsUtils";

triggerNotification(
  { send: (msg) => console.log(msg) },
  { log: () => console.log("Logger call") }
);

const isObject = (o) => {
  return o === Object(o) && !Array.isArray(o) && typeof o !== "function";
};
