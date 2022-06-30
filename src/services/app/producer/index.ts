import { endpoints } from '@src/constants/endpoints';
import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import { httpGET } from '../../http-client';

export function getAllProducers(): Promise<MinimalProducer[]> {
  return httpGET<MinimalProducer[]>(endpoints.producer.GET_ALL);
}

export function getProducerById(id: string, token: string): Promise<ProducerDetail> {
  return httpGET<ProducerDetail>(`${endpoints.producer.GET_BY_ID}${id}`, token);
}

export function getProducerProductById(
  id: string,
  producerId: string,
  token: string,
): Promise<ProducerProductDetail> {
  return httpGET<ProducerProductDetail>(
    `${endpoints.producer.GET_BY_ID}${producerId}/product/${id}`,
    token,
  );
}
