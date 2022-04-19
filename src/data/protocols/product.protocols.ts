import { Product } from '@/domain/entities';

export interface ICreateProductByIdRepository {
  create(id: ICreateProductByIdRepository.Params): Promise<ICreateProductByIdRepository.Result>
}

export namespace ICreateProductByIdRepository {
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
