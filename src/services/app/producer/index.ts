import { endpoints } from '@src/constants/endpoints';
import { Market } from '@src/store/slices/market/types';
import {
  MinimalProducerProduct,
  ProducerProduct,
  ProducerProductDetail,
} from '@src/store/slices/producer-product/type';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import * as client from '../../http-client';

export function getAllProducers(): Promise<MinimalProducer[]> {
  return client.httpGET<MinimalProducer[]>(endpoints.producer.DEFAULT);
}

export function getProducerById(id: string, token: string): Promise<ProducerDetail> {
  return client.httpGET<ProducerDetail>(`${endpoints.producer.DEFAULT}/${id}`, token);
}

export function getProducerProductById(id: string, token: string): Promise<ProducerProductDetail> {
  return client.httpGET<ProducerProductDetail>(`${endpoints.producerProduct.DEFAULT}/${id}`, token);
}

export function getOwnProducerProduct(token: string): Promise<MinimalProducerProduct[]> {
  return client.httpGET<MinimalProducerProduct[]>(endpoints.producerProduct.DEFAULT, token);
}

export function updateProductProduct(
  id: string,
  data: ProducerProductDetail,
  token: string,
): Promise<void> {
  return client.httpPUT(`${endpoints.producerProduct.DEFAULT}/${id}`, data, token);
}

export function postProducerProducts(data: ProducerProduct[], token: string): Promise<void> {
  return client.httpPOST(endpoints.producerProduct.DEFAULT, data, token);
}

export function postProducerMarkets(data: Market[], token: string): Promise<void> {
  return client.httpPOST(endpoints.producerMarket.DEFAULT, data, token);
}

export function inactiveProductProduct(id: string, token: string): Promise<void> {
  return client.httpPATCH(`${endpoints.producerProduct.DEFAULT}/${id}/inactive`, token);
}
