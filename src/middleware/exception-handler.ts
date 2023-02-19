import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';

export const exceptionHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).send('Hold your horses, partner!');
};
