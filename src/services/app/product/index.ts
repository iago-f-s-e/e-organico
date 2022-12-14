import { endpoints } from '@src/services/config/endpoints';
import { Product } from '@src/store/slices/product/types';
import { httpGET } from '../../http-client';

export function getAllProducts(): Promise<Product[]> {
  return httpGET<Product[]>(endpoints.product.GET_ALL);
}

export function getProductsWithoutProducerProduct(token: string): Promise<Product[]> {
  return httpGET<Product[]>(endpoints.product.GET_WITHOUT_PRODUCER_PRODUCT, token);
}
