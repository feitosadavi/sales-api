import { ProductEntity } from './entities';
import AppDataSource from './data-source';
import { ICreateProductRepository, ILoadProductByIdRepository } from '@/data/protocols';
import { Product } from '@/domain/entities';

class ProductsPostgresRepository implements ICreateProductRepository, ILoadProductByIdRepository {
  async create(product: ICreateProductRepository.Params): Promise<Product> {
    const productEntity = AppDataSource.getRepository(ProductEntity);
    const productCreated = await productEntity.save(product);
    return productCreated;
  }

  async loadById(id: string): Promise<ILoadProductByIdRepository.Result> {
    const productEntity = AppDataSource.getRepository(ProductEntity);
    console.log({ id });
    const product = await productEntity.findOne({
      where: { id },
    });
    console.log({ product });
    return product;
  }
}

export default ProductsPostgresRepository;
