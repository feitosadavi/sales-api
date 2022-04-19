import { DbCreateProduct } from '@/data/usecases';
import { ICreateProductRepository } from '@/data/protocols';

import { mockCreateProductRepository } from '../mocks/product.mocks';
import { makeFakeCreateParams } from '../../domain/fakes';

type SutType = {
  sut: DbCreateProduct,
  mockCreateProductRepositoryStub: ICreateProductRepository
}

const makeSut = (): SutType => {
  const mockCreateProductRepositoryStub = mockCreateProductRepository();
  const sut = new DbCreateProduct(mockCreateProductRepositoryStub);
  return {
    sut,
    mockCreateProductRepositoryStub,
  };
};

describe('DBCreateProduct', () => {
  const params = makeFakeCreateParams();

  test('should call create with correct params', async () => {
    const { sut, mockCreateProductRepositoryStub } = makeSut();
    const loadByIdSpy = jest.spyOn(mockCreateProductRepositoryStub, 'create');
    await sut.exec(params);
    expect(loadByIdSpy).toHaveBeenCalledWith(params);
  });

  test('should call loadById with correct params', async () => {
    const { sut, mockCreateProductRepositoryStub } = makeSut();
    jest.spyOn(mockCreateProductRepositoryStub, 'create').mockImplementationOnce(() => { throw new Error(); });
    const promise = sut.exec(params);
    await expect(promise).rejects.toThrow();
  });

  test('should return a product', async () => {
    const { sut } = makeSut();
    const product = await sut.exec(params);
    expect(product.id).toBe('any_id');
  });
});
