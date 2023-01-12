import { endpoints } from '@src/services/config/endpoints';
import { Market } from '@src/store/slices/market/types';
import { ProducerProduct } from '@src/store/slices/producer-product/type';
import { httpPOST } from '../../http-client';

export function postProducerProducts(data: ProducerProduct[], token: string): Promise<void> {
  return httpPOST(endpoints.producerProduct.DEFAULT, data, token);
}

export function postProducerMarkets(data: Market[], token: string): Promise<void> {
  return httpPOST(endpoints.producerMarket.DEFAULT, data, token);
}
