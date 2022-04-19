import { Product } from '@/domain/entities';

export interface ILoadProductById {
  exec(id: ILoadProductById.Params): Promise<ILoadProductById.Result>
}

export namespace ILoadProductById {
  export type Params = string
  export type Result = Product
}
