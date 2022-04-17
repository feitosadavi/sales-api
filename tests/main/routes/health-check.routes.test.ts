import request from 'supertest';
import { Express } from 'express';

import { setupApp } from '@/main/config';

describe('Server tests', () => {
  let app: Express;

  beforeAll(async () => {
    app = setupApp();
  });

  test('[GET] /', async () => {
    const res = await request(app).get('/api/health-check');
    expect(res.body).toEqual({ status: 'healthy' });
  });
});
