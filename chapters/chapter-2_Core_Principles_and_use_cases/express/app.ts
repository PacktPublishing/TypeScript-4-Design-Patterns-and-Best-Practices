import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const logger = morgan("combined");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(logger);

app.set("port", process.env.PORT || 3000);

export default app;
