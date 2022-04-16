import express, { Express } from 'express';
import dotenv from 'dotenv';

const setupApp = (): Express => {
  dotenv.config();

  const app = express();
  app.get('/', (_, res) => {
    res.send('Hello ts-node!');
  });

  return app;
};

export default setupApp;
