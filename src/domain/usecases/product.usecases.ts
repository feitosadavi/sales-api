import { Product } from '@/domain/entities';

export interface ICreateProduct {
  exec(product: ICreateProduct.Params): Promise<ICreateProduct.Result>
}

export namespace ICreateProduct {
  export type Params = Omit<Product, 'id' | 'created_at' | 'updated_at'>
  export type Result = Product
}

export interface ILoadProductById {
  exec(id: ILoadProductById.Params): Promise<ILoadProductById.Result>
}

export namespace ILoadProductById {
  export type Params = string
  export type Result = Product
}
