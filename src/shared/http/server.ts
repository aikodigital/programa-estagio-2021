import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';
import AppError from './errors/AppError';
import '../typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return response.status(500).json({
      staus: error,
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
