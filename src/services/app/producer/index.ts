import { endpoints } from '@src/constants/endpoints';
import { MinimalProducer, ProducerDetail } from '@src/store/slices/producer/types';
import { httpClientGET } from '../../http-client';

export function getAllProducers(): Promise<MinimalProducer[]> {
  return httpClientGET<MinimalProducer[]>(endpoints.producer.GET_ALL);
}

export function getProducerById(id: string): Promise<ProducerDetail> {
  return httpClientGET<ProducerDetail>(`${endpoints.producer.GET_BY_ID}${id}`);
}
