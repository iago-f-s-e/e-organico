import { endpoints } from '@src/constants/endpoints';
import { Product } from '@src/store/slices/product/types';
import { httpGET } from '../../http-client';

export function getAllProducts(): Promise<Product[]> {
  return httpGET<Product[]>(endpoints.product.GET_ALL);
}
