import MockDate from 'mockdate';
import { Repository } from 'typeorm';

import { ProductsPostgresRepository, AppDataSource } from '@/infra/repos/postgres';
import { ProductEntity } from '@/infra/repos/postgres/entities';

describe('ProductsRepository', () => {
  const postgresProduct = new ProductsPostgresRepository();
  let productRepository: Repository<ProductEntity>;
  beforeAll(async () => {
    MockDate.set(new Date());
    await AppDataSource.initialize();
    productRepository = AppDataSource.getRepository(ProductEntity);
  });
  beforeEach(() => {
    productRepository.clear();
  });
  afterAll(() => {
    MockDate.reset();
    AppDataSource.destroy();
  });
  test('should LoadProductById return a product', async () => {
    const res = await productRepository.insert({
      name: 'Tenis',
      price: 1300,
      quantity: 2,
    });
    const { id } = res.identifiers[0];
    const product = await postgresProduct.loadById(id);
    expect(product.id).toBe(id);
  });
});
