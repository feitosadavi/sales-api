import req from 'supertest';
import { Express } from 'express';
import setupApp from '../../src/main/config/app';

describe('Server tests', () => {
  let app: Express;

  beforeAll(async () => {
    app = setupApp();
  });

  test('[GET] /', async () => {
    req('localhost');
    const res = await req(app).get('/');
    expect(res.text).toBe('Hello ts-node!');
  });
});
