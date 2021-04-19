import "reflect-metadata";
import { interfaces, InversifyExpressServer } from "inversify-express-utils";

import app from "./app";
import container from "./container";

const port = process.env.PORT || 3000;

let server = new InversifyExpressServer(container, null, null, app);
server.build().listen(port);
