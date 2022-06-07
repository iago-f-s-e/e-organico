import { getAllProducers } from '@src/services/app/producer';
import { MinimalProducer } from '@src/store/slices/producer/types';
import { OnError, Response } from './types';

type HandleProducer = (onError: OnError) => {
  getAll: () => Promise<Response<MinimalProducer[]>>;
};

export const handleProducer: HandleProducer = (onError) => {
  return {
    getAll: async () => {
      try {
        const markets = await getAllProducers();

        return { data: markets, error: null };
      } catch (error) {
        onError(error.message);

        return { data: null, error: error.message };
      }
    },
  };
};
