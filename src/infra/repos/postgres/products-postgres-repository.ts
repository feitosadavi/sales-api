import { ProductEntity } from './entities';
import AppDataSource from './data-source';
import { ICreateProductByIdRepository, ILoadProductByIdRepository } from '@/data/protocols';
import { Product } from '@/domain/entities';

class ProductsPostgresRepository implements ICreateProductByIdRepository, ILoadProductByIdRepository {
  async create(product: ICreateProductByIdRepository.Params): Promise<Product> {
    const productEntity = AppDataSource.getRepository(ProductEntity);
    const productCreated = await productEntity.save(product);
    return productCreated;
  }

  async loadById(id: string): Promise<ILoadProductByIdRepository.Result> {
    const productEntity = AppDataSource.getRepository(ProductEntity);
    const product = await productEntity.findOne({
      where: { id },
    });
    return product;
  }
}

export default ProductsPostgresRepository;
