import { endpoints } from '@src/constants/endpoints';
import { Market, MarketDetail } from '@src/store/slices/market/types';
import { httpClientGET } from '../../http-client';

export function getAllMarkets(): Promise<Market[]> {
  return httpClientGET<Market[]>(endpoints.market.GET_ALL);
}

export function getMarketById(id: string): Promise<MarketDetail> {
  return httpClientGET<MarketDetail>(`${endpoints.market.GET_BY_ID}${id}`);
}
