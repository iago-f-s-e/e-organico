import { endpoints } from '@src/constants/endpoints';
import { Market } from '@src/store/slices/market/types';
import { httpClientGET } from '../../http-client';

export function getAllMarkets(): Promise<Market[]> {
  return httpClientGET<Market[]>(endpoints.market.GET_ALL);
}
