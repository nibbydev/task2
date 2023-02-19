import { Request } from 'express';

export interface IBodyParsedRequest extends Request {
  parsedBody?: object;
}
