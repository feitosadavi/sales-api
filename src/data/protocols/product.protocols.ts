import { Product } from '@/domain/entities';

export interface ILoadProductByIdRepository {
  loadById(id: ILoadProductByIdRepository.Params): Promise<ILoadProductByIdRepository.Result>
}

export namespace ILoadProductByIdRepository {
  export type Params = string
  export type Result = Product
}
