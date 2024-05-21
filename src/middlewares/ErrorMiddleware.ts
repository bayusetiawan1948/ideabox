import { ResponseError } from '../error/ResponseError';
import { Request, Response, NextFunction } from 'express';
const ErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) {
    next();
    return;
  }
  if (err instanceof ResponseError) {
    console.info(`Warning : ${err.message}`);
    res
      .status(err.status)
      .json({
        errors: err.message,
      })
      .end();
  } else {
    console.info(`Warning : ${err.message}`);
    res
      .status(500)
      .json({
        errors: 'Internal Error',
      })
      .end();
  }
};

export { ErrorMiddleware };
