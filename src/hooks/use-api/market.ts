import { Market } from '@src/store/slices/market/types';
import { getAllMarkets } from '@src/services/app';
import { OnError, Response } from './types';

type HandleMarket = (onError: OnError) => {
  getAll: () => Promise<Response<Market[]>>;
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
  };
};
