import { Product } from '@/domain/entities';

export interface ICreateProductRepository {
  create(id: ICreateProductRepository.Params): Promise<ICreateProductRepository.Result>
}

export namespace ICreateProductRepository {
  export type Params = Omit<Product, 'id' | 'created_at' | 'updated_at'>
  export type Result = Product
}

export interface ILoadProductByIdRepository {
  loadById(id: ILoadProductByIdRepository.Params): Promise<ILoadProductByIdRepository.Result>
}

export namespace ILoadProductByIdRepository {
  export type Params = string
  export type Result = Product
}
