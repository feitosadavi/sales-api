import { ProductEntity } from './entities';
import AppDataSource from './data-source';
import { ILoadProductByIdRepository } from '@/data/protocols';

class ProductsPostgresRepository implements ILoadProductByIdRepository {
  async loadById(id: string): Promise<ILoadProductByIdRepository.Result> {
    console.log({ id });
    const productEntity = AppDataSource.getRepository(ProductEntity);
    const product = await productEntity.findOne({
      where: { id },
    });
    return product;
  }
}

export default ProductsPostgresRepository;
