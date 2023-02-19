import { NextFunction, Response } from 'express';
import { IBodyParsedRequest } from '../model/body-parsed-request';

export function bodyParser(
  req: IBodyParsedRequest,
  res: Response,
  next: NextFunction
) {
  if (req.headers['content-type'] !== 'application/json') {
    next();
    return;
  }

  let buffer = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => (buffer += chunk));
  req.on('end', () => {
    if (buffer) {
      try {
        req.parsedBody = JSON.parse(buffer);
        next();
      } catch (e) {
        next(e);
      }
    } else {
      next();
    }
  });
}
