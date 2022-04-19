import MockDate from 'mockdate';

import { ICreateProduct } from '@/domain/usecases';
import { CreateProductController } from '@/presentation/controllers';
import { makeFakeCreateParams, makeFakeProductsModel } from '../../domain/fakes/fake-products';

import { mockCreateProductStub } from '../mocks/product.mocks';

type SutType = {
  sut: CreateProductController,
  createProductStub: ICreateProduct
}

const mockRequest = () => (makeFakeCreateParams());

const makeSut = (): SutType => {
  const createProductStub = mockCreateProductStub();
  const sut = new CreateProductController(createProductStub);
  return {
    sut,
    createProductStub,
  };
};

describe('ProductsRepository', () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(() => {
    MockDate.reset();
  });
  test('should call craete with correct params', async () => {
    const { sut, createProductStub } = makeSut();
    const execSpy = jest.spyOn(createProductStub, 'exec');
    await sut.handle(mockRequest());
    expect(execSpy).toHaveBeenCalledWith(mockRequest());
  });

  test('should 500 on error', async () => {
    const { sut, createProductStub } = makeSut();
    jest.spyOn(createProductStub, 'exec').mockReturnValueOnce(Promise.reject(new Error()));
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
    const res = await sut.handle(mockRequest());
    expect(res).toEqual({
      statusCode: 200,
      body: makeFakeProductsModel()[0],
    });
  });
});
