import { ICreateProduct } from '@/domain/usecases';
import { ICreateProductRepository } from '@/data/protocols';

export class DbCreateProduct implements ICreateProduct {
  constructor(private readonly createProductRepository: ICreateProductRepository) {}

  async exec(product: ICreateProduct.Params): Promise<ICreateProduct.Result> {
    const productCreated = await this.createProductRepository.create(product);
    return productCreated;
  }
}
