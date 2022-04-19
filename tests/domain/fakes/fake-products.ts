import { Product } from '@/domain/entities';

export const makeFakeProductsModel = (): Product[] => ([{
  id: 'any_id',
  name: 'any_name',
  price: 9999,
  quantity: 9999,
  created_at: new Date(),
  updated_at: new Date(),
}]);
