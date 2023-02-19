import * as express from 'express';
import { bodyParser } from './middleware/body-parser';
import { exceptionHandler } from './middleware/exception-handler';
import { ROUTER } from './routes';

const app = express.default();
const port = 3000;

app.use(bodyParser);
app.use('/api/v1/bodyparser-middleware', ROUTER);
app.use(exceptionHandler);

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
