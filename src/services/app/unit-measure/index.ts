import { endpoints } from '@src/constants/endpoints';
import { Product } from '@src/store/slices/product/types';
import { httpClientGET } from '../../http-client';

export function getAllProducts(): Promise<Product[]> {
  return httpClientGET<Product[]>(endpoints.product.GET_ALL);
}
