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
    await productRepository.delete({ id }); // clears database
  });
  test('should CreateProduct create and return a product', async () => {
    const product = await postgresProduct.create({
      name: 'Tenis',
      price: 1300,
      quantity: 2,
    });
    expect(product.id).toBeTruthy();
    expect(product.created_at).toBeTruthy();
    expect(product.updated_at).toBeTruthy();
    expect(product.name).toBe('Tenis');
    expect(product.price).toBe(1300);
    expect(product.quantity).toBe(2);
    await productRepository.delete({ id: product.id }); // clears database
  });
});
