import { AppDataSource } from '@/infra/repos/postgres/data-source';
import { setupApp } from './config';
import 'reflect-metadata';

const app = setupApp();

const PORT = process.env.PORT || 3000;
AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`[SERVER] Running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
