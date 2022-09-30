import "./alias";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { rateLimiterMiddleware } from "./middlewares/rate_limiter";
import { handleErrorMiddleware } from "./middlewares/error_handler";
import { register_body } from "./middlewares/register_body";
import { log_all } from "./middlewares/log_all";
import logger from "./helpers/logger";
import "./database/database";
import restRouter from "./routers";

//importing routes - datos de prueba
import saldosServices from "./services/saldosServices";
import prestamosServices from "./services/prestamosServices";

//importing configs
import { settings } from "./config/settings";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  config() {}

  middlewares() {
    this.app.use(cors());
    this.app.use(rateLimiterMiddleware);
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(register_body);
    this.app.use(
      morgan(
        '[:date[iso]] (:status) ":method :url HTTP/:http-version" :response-time ms - [:res[content-length]] - :body'
      )
    );
    //this.app.use(log_all);
  }

  routes() {
    this.app.use(restRouter);
    this.app.use(handleErrorMiddleware);

    //Datos de prueba
    //this.app.use(saldosServices)
    //this.app.use(prestamosServices)
  }

  start() {
    this.app.listen(settings.PORT, () => {
      logger.info("🚀 Server listen on port " + settings.PORT);
    });
  }
}

const server = new Server();
server.start();
