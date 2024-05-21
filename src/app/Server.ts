import express, { Request, Response } from 'express';
import cors from 'cors';
import { ErrorMiddleware } from '../middlewares/ErrorMiddleware';
import { PublicRoutes } from '../routes/PublicRoutes';
const App = express();

App.use(express.static('public'));
App.use(express.json());
App.use(cors());

// route component
App.get('/', (req: Request, res: Response) => {
  res.send('Happy Learning');
});

App.use(PublicRoutes);
// app.use(privateRouter);

//route middleware
App.use(ErrorMiddleware);

export { App };
