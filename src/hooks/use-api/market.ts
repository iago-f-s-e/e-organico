import { Market, MarketDetail } from '@src/store/slices/market/types';
import * as services from '@src/services/app/market';
import { translateGetError } from '@src/utils';
import { OnError, Response } from './types';

type HandleMarket = (onError: OnError) => {
  getAll: () => Promise<Response<Market[]>>;
  getMarketsWithoutProducerMarket: (token: string) => Promise<Response<Market[]>>;
  getById: (id: string) => Promise<Response<MarketDetail>>;
};

export const handleMarket: HandleMarket = (onError) => {
  return {
    getAll: async () => {
      try {
        const markets = await services.getAllMarkets();

        return { data: markets, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },

    getMarketsWithoutProducerMarket: async (token) => {
      try {
        const markets = await services.getMarketsWithoutProducerMarket(token);

        return { data: markets, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },

    getById: async (id) => {
      try {
        const market = await services.getMarketById(id);

        return { data: market, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },
  };
};
