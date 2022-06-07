import { Market, MarketDetail } from '@src/store/slices/market/types';
import { getAllMarkets, getMarketById } from '@src/services/app';
import { OnError, Response } from './types';

type HandleMarket = (onError: OnError) => {
  getAll: () => Promise<Response<Market[]>>;
  getById: (id: string) => Promise<Response<MarketDetail>>;
};

export const handleMarket: HandleMarket = (onError) => {
  return {
    getAll: async () => {
      try {
        const markets = await getAllMarkets();

        return { data: markets, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },
    getById: async (id) => {
      try {
        const market = await getMarketById(id);

        return { data: market, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },
  };
};
