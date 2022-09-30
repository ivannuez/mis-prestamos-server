import { NextFunction, Request, Response } from "express";
import morgan from "morgan";

export const register_body = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  morgan.token("body", () => JSON.stringify(req.body));
  next();
};
