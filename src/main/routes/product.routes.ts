import { Router } from 'express';
import { DbLoadProductById, DbCreateProduct } from '@/data/usecases';
import { ProductsPostgresRepository } from '@/infra/repos/postgres';
import { CreateProductController, LoadProductByIdController } from '@/presentation/controllers';
import { adaptRoute } from '@/main/adapters';

const makeLoadProductByIdController = (): LoadProductByIdController => {
  const productsPostgresRepository = new ProductsPostgresRepository();
  const dbLoadProductById = new DbLoadProductById(productsPostgresRepository);
  return new LoadProductByIdController(dbLoadProductById);
};

const makeCreateProductController = (): CreateProductController => {
  const productsPostgresRepository = new ProductsPostgresRepository();
  const dbCreateProduct = new DbCreateProduct(productsPostgresRepository);
  return new CreateProductController(dbCreateProduct);
};

export default (router: Router): void => {
  router.get('/products/:id', adaptRoute(makeLoadProductByIdController()));
  router.post('/products/create', adaptRoute(makeCreateProductController()));
};
