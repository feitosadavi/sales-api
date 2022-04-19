import { Controller, HttpResponse } from '@/presentation/protocols';
import { ILoadProductById } from '@/domain/usecases';

class LoadProductByIdController implements Controller<{id: string}> {
  constructor(private readonly loadProductById: ILoadProductById) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      const { id } = request;
      console.log(id);
      const product = await this.loadProductById.exec(id);
      console.log({ product });
      return {
        statusCode: 200,
        body: product || { product: {} },
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

export default LoadProductByIdController;
