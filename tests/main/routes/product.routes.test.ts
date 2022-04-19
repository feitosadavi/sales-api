import request from 'supertest';
import { Express } from 'express';

import { Repository } from 'typeorm';
import { setupApp } from '@/main/config';

import 'reflect-metadata';
import { AppDataSource } from '@/infra/repos/postgres';
import { ProductEntity } from '@/infra/repos/postgres/entities';

describe('Server tests', () => {
  let app: Express;
  let productRepository: Repository<ProductEntity>;

  beforeAll(async () => {
    app = setupApp();
    await AppDataSource.initialize();
    productRepository = AppDataSource.getRepository(ProductEntity);
  });
  beforeEach(() => {
    productRepository.clear();
  });
  afterAll(() => {
    // MockDate.reset();
    AppDataSource.destroy();
  });

  describe('[GET] /products/:id', () => {
    test('should return 200 on success', async () => {
      const insertedProduct = await productRepository.insert({
        name: 'Tenis',
        price: 1300,
        quantity: 2,
      });
      const { id } = insertedProduct.identifiers[0];
      const res = await request(app).get(`/api/products/${id}`);
      expect(res.status).toBe(200);
      expect(res.body.name).toBe('Tenis');
      expect(res.body.price).toBe(1300);
      expect(res.body.quantity).toBe(2);
    });
  });

  describe('[POST] /products/create', () => {
    test('should return 200 on success', async () => {
      const res = await request(app).post('/api/products/create').send({
        name: 'Camisa',
        price: 50,
        quantity: 3,
      });
      expect(res.status).toBe(200);
      expect(res.body.name).toBe('Camisa');
      expect(res.body.price).toBe(50);
      expect(res.body.quantity).toBe(3);

      const { id } = res.body;
      await productRepository.delete({ id });
    });
  });
});
