import { setupApp } from './config';

const app = setupApp();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[SERVER] Running at http://localhost:${PORT}`);
});
