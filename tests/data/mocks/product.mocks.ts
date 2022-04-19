import { ILoadProductByIdRepository } from '@/data/protocols';
import { makeFakeProductsModel } from '../../domain/fakes/fake-products';

export const mockLoadProductByIdRepository = (): ILoadProductByIdRepository => {
  class LoadProductByIdRepositoryStub implements ILoadProductByIdRepository {
    async loadById(_id: ILoadProductByIdRepository.Params): Promise<ILoadProductByIdRepository.Result> {
      return makeFakeProductsModel()[0];
    }
  }
  return new LoadProductByIdRepositoryStub();
};
