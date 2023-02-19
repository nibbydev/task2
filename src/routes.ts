import { Response, Router } from 'express';
import { IBodyParsedRequest } from './model/body-parsed-request';

export const ROUTER = Router();

ROUTER.post('/', (req: IBodyParsedRequest, res: Response) => {
  if (req.parsedBody) {
    res.status(200).send('OK');
  } else {
    res.status(200).send('No body');
  }
});
