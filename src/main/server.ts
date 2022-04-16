import setupApp from './config/app';

const app = setupApp();

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`[SERVER] Running at http://localhost:${PORT}`);
});
