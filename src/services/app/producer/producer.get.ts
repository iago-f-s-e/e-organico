import { endpoints } from '@src/services/config/endpoints';
import {
  MinimalProducerProduct,
  ProducerProductDetail,
} from '@src/store/slices/producer-product/type';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import { httpGET } from '../../http-client';

export function getAllProducers(): Promise<MinimalProducer[]> {
  return httpGET<MinimalProducer[]>(endpoints.producer.DEFAULT);
}

export function getProducerById(id: string, token: string): Promise<ProducerDetail> {
  return httpGET<ProducerDetail>(`${endpoints.producer.DEFAULT}/${id}`, token);
}

export function getProducerProductById(id: string, token: string): Promise<ProducerProductDetail> {
  return httpGET<ProducerProductDetail>(`${endpoints.producerProduct.DEFAULT}/${id}`, token);
}

export function getOwnProducerProduct(token: string): Promise<MinimalProducerProduct[]> {
  return httpGET<MinimalProducerProduct[]>(endpoints.producerProduct.DEFAULT, token);
}
