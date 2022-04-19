import { ILoadProductById } from '@/domain/usecases';
import { Product } from '@/domain/entities';
import { ILoadProductByIdRepository } from '@/data/protocols';

export class DbLoadProductById implements ILoadProductById {
  constructor(private readonly loadProductByIdRepository: ILoadProductByIdRepository) {}

  async exec(id: string): Promise<Product> {
    console.log({ id });
    const product = await this.loadProductByIdRepository.loadById(id);
    return product;
  }
}
