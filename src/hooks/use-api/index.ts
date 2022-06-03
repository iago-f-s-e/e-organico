import { useToast as _useToast } from '@src/hooks/use-toast';
import { Market } from '@src/store/slices/market/types';
import { handleMarket } from './market';

type UseApi = {
  getAllMarkets: () => Promise<Market[]>;
};

export const useApi = (): UseApi => {
  const useToast = _useToast();

  const getAllMarkets = async (): Promise<Market[]> => {
    const { data, error } = await handleMarket(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  return { getAllMarkets };
};
