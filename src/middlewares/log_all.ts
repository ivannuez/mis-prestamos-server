import { NextFunction, Request, Response } from "express";
import logger from "@helpers/logger";

export const log_all = (req: Request, res: Response, next: NextFunction) => {
  console.log("log_all");
  console.log(
    `request - [${req.method}] - ${req.url} - ${JSON.stringify(req.body)}`
  );
  /*console.log(
    `response - [${req.method}] - ${req.url} - ${JSON.stringify(res)}`
  );*/
  //console.log(req.url);
  //console.log(req.body);

  //logger.info(req);
  //logger.info(res);
  next();
};
