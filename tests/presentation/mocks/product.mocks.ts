/* eslint-disable max-classes-per-file */
import { ILoadProductById, ICreateProduct } from '@/domain/usecases';
import { makeFakeProductsModel } from '../../domain/fakes/fake-products';

export const mockCreateProductStub = (): ICreateProduct => {
  class CreateProductStub implements ICreateProduct {
    async exec(_product: ICreateProduct.Params): Promise<ICreateProduct.Result> {
      return makeFakeProductsModel()[0];
    }
  }
  return new CreateProductStub();
};

export const mockLoadProductById = (): ILoadProductById => {
  class LoadProductByIdStub implements ILoadProductById {
    async exec(_id: ILoadProductById.Params): Promise<ILoadProductById.Result> {
      return makeFakeProductsModel()[0];
    }
  }
  return new LoadProductByIdStub();
};
