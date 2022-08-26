import { endpoints } from '@src/constants/endpoints';
import { Market, MarketDetail } from '@src/store/slices/market/types';
import { httpGET } from '../../http-client';

export function getAllMarkets(): Promise<Market[]> {
  return httpGET<Market[]>(endpoints.market.GET_ALL);
}

export function getMarketsWithoutProducerMarket(token: string): Promise<Market[]> {
  return httpGET<Market[]>(endpoints.market.GET_WITHOUT_PRODUCER_MARKET, token);
}

export function getMarketById(id: string): Promise<MarketDetail> {
  return httpGET<MarketDetail>(`${endpoints.market.GET_BY_ID}${id}`);
}
