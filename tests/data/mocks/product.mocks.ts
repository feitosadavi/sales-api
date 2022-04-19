/* eslint-disable max-classes-per-file */
import { ICreateProductRepository, ILoadProductByIdRepository } from '@/data/protocols';
import { makeFakeProductsModel } from '../../domain/fakes';

export const mockCreateProductRepository = (): ICreateProductRepository => {
  class CreateProductRepositoryStub implements ICreateProductRepository {
    async create(product: ICreateProductRepository.Params): Promise<ICreateProductRepository.Result> {
      return makeFakeProductsModel()[0];
    }
  }
  return new CreateProductRepositoryStub();
};

export const mockLoadProductByIdRepository = (): ILoadProductByIdRepository => {
  class LoadProductByIdRepositoryStub implements ILoadProductByIdRepository {
    async loadById(id: ILoadProductByIdRepository.Params): Promise<ILoadProductByIdRepository.Result> {
      return makeFakeProductsModel()[0];
    }
  }
  return new LoadProductByIdRepositoryStub();
};
