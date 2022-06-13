import { endpoints } from '@src/constants/endpoints';
import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import { httpClientGET } from '../../http-client';

export function getAllProducers(): Promise<MinimalProducer[]> {
  return httpClientGET<MinimalProducer[]>(endpoints.producer.GET_ALL);
}

export function getProducerById(id: string, token: string): Promise<ProducerDetail> {
  return httpClientGET<ProducerDetail>(`${endpoints.producer.GET_BY_ID}${id}`, token);
}

export function getProducerProductById(
  id: string,
  producerId: string,
  token: string,
): Promise<ProducerProductDetail> {
  return httpClientGET<ProducerProductDetail>(
    `${endpoints.producer.GET_BY_ID}${producerId}/product/${id}`,
    token,
  );
}
