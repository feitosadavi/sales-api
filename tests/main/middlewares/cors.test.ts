import request from 'supertest';
import { Express } from 'express';

import { setupApp } from '@/main/config';

describe('CORS Middleware', () => {
  let app: Express;
  beforeAll(async () => {
    app = setupApp();
  });
  test('Should enable CORS', async () => {
    app.get('/test_cors', (_, res) => {
      res.send({ ok: true });
    });
    await request(app)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*');
  });
});
