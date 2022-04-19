import { DbLoadProductById } from '@/data/usecases';
import { ILoadProductByIdRepository } from '@/data/protocols';

import { mockLoadProductByIdRepository } from './mocks/product.mocks';

type SutType = {
  sut: DbLoadProductById,
  loadProductByIdRepositoryStub: ILoadProductByIdRepository
}

const makeSut = (): SutType => {
  const loadProductByIdRepositoryStub = mockLoadProductByIdRepository();
  const sut = new DbLoadProductById(loadProductByIdRepositoryStub);
  return {
    sut,
    loadProductByIdRepositoryStub,
  };
};

describe('ProductsRepository', () => {
  test('should DBLoadProductById call loadById with correct params', async () => {
    const { sut, loadProductByIdRepositoryStub } = makeSut();
    const loadByIdSpy = jest.spyOn(loadProductByIdRepositoryStub, 'loadById');
    await sut.exec('any_id');
    expect(loadByIdSpy).toHaveBeenCalledWith('any_id');
  });

  test('should DBLoadProductById call loadById with correct params', async () => {
    const { sut, loadProductByIdRepositoryStub } = makeSut();
    jest.spyOn(loadProductByIdRepositoryStub, 'loadById').mockImplementationOnce(() => { throw new Error(); });
    const promise = sut.exec('any_id');
    await expect(promise).rejects.toThrow();
  });

  test('should DBLoadProductById return a product', async () => {
    const { sut } = makeSut();
    const product = await sut.exec('any_id');
    expect(product.id).toBe('any_id');
  });
});
