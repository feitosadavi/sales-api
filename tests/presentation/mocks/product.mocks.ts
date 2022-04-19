import { ILoadProductById } from '@/domain/usecases';
import { makeFakeProductsModel } from '../../domain/fakes/fake-products';

export const mockLoadProductById = (): ILoadProductById => {
  class LoadProductByIdStub implements ILoadProductById {
    async exec(_id: ILoadProductById.Params): Promise<ILoadProductById.Result> {
      return makeFakeProductsModel()[0];
    }
  }
  return new LoadProductByIdStub();
};
