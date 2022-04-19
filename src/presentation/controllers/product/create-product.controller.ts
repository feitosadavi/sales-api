import { ICreateProduct } from '@/domain/usecases';
import { Product } from '@/domain/entities';
import { Controller, HttpResponse } from '@/presentation/protocols';

class CreateProductController implements Controller {
  constructor(private readonly createProduct: ICreateProduct) {}

  async handle(request: CreateProductController.Request): Promise<HttpResponse> {
    try {
      const { name, price, quantity } = request;
      const createdProduct = await this.createProduct.exec({ name, price, quantity });
      return {
        statusCode: 200,
        body: createdProduct,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          message: 'Erro interno do servidor',
        },
      };
    }
  }
}

export namespace CreateProductController {
  export type Request = ICreateProduct.Params
}

export default CreateProductController;
