interface Logger {
  log: (msg: string) => void;
}

let logger: Logger;
let cat = { log: (msg: string) => console.log(msg) };
logger = cat;
