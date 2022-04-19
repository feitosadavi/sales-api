import { Router } from 'express';
import { DbLoadProductById } from '@/data/usecases';
import { ProductsPostgresRepository } from '@/infra/repos/postgres';
import { LoadProductByIdController } from '@/presentation/controllers';
import { adaptRoute } from '@/main/adapters';

const makeLoadProductByIdController = (): LoadProductByIdController => {
  const productsRepository = new ProductsPostgresRepository();
  const dbLoadProductById = new DbLoadProductById(productsRepository);
  return new LoadProductByIdController(dbLoadProductById);
};

export default (router: Router): void => {
  router.get('/products/:id', adaptRoute(makeLoadProductByIdController()));
};
