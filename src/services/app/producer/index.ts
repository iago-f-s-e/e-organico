import { endpoints } from '@src/constants/endpoints';
import { MinimalProducer } from '@src/store/slices/producer/types';
import { httpClientGET } from '../../http-client';

export function getAllProducers(): Promise<MinimalProducer[]> {
  return httpClientGET<MinimalProducer[]>(endpoints.producer.GET_ALL);
}
