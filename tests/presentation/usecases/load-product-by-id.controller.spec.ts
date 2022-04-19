import MockDate from 'mockdate';

import { ILoadProductById } from '@/domain/usecases';
import { LoadProductByIdController } from '@/presentation/controllers';
import { makeFakeProductsModel } from '../../domain/fakes/fake-products';

import { mockLoadProductById } from '../mocks/product.mocks';

type SutType = {
  sut: LoadProductByIdController,
  loadProductByIdStub: ILoadProductById
}

const mockRequest = () => ({ id: 'any_id' });

const makeSut = (): SutType => {
  const loadProductByIdStub = mockLoadProductById();
  const sut = new LoadProductByIdController(loadProductByIdStub);
  return {
    sut,
    loadProductByIdStub,
  };
};

describe('ProductsRepository', () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });
  test('should DBLoadProductById call loadById with correct params', async () => {
    const { sut, loadProductByIdStub } = makeSut();
    const execSpy = jest.spyOn(loadProductByIdStub, 'exec');
    await sut.handle(mockRequest());
    expect(execSpy).toHaveBeenCalledWith(mockRequest().id);
  });

  test('should 500 on error', async () => {
    const { sut, loadProductByIdStub } = makeSut();
    jest.spyOn(loadProductByIdStub, 'exec').mockReturnValueOnce(Promise.reject(new Error()));
    const res = await sut.handle(mockRequest());
    expect(res).toEqual({
      statusCode: 500,
      body: {
        message: 'Erro interno do servidor',
      },
    });
  });

  test('should 200 on success', async () => {
    const { sut } = makeSut();
    const res = await sut.handle({ id: 'any_id' });
    expect(res).toEqual({
      statusCode: 200,
      body: makeFakeProductsModel()[0],
    });
  });
});
