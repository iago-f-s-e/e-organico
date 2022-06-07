import { useToast as _useToast } from '@src/hooks/use-toast';
import { Market } from '@src/store/slices/market/types';
import { MinimalProducer } from '@src/store/slices/producer/types';
import { Product } from '@src/store/slices/product/types';
import { UnitMeasure } from '@src/store/slices/unit-measure/types';
import { handleMarket } from './market';
import { handleProducer } from './producer';
import { handleProduct } from './product';
import { handleUnitMeasure } from './unit-measure';

type UseApi = {
  getAllProducts: () => Promise<Product[]>;
  getAllProducers: () => Promise<MinimalProducer[]>;
  getAllMarkets: () => Promise<Market[]>;
  getAllUnitMeasures: () => Promise<UnitMeasure[]>;
};

export const useApi = (): UseApi => {
  const useToast = _useToast();

  const getAllMarkets = async (): Promise<Market[]> => {
    const { data, error } = await handleMarket(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllProducers = async (): Promise<MinimalProducer[]> => {
    const { data, error } = await handleProducer(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllProducts = async (): Promise<Product[]> => {
    const { data, error } = await handleProduct(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  const getAllUnitMeasures = async (): Promise<UnitMeasure[]> => {
    const { data, error } = await handleUnitMeasure(useToast.error).getAll();

    if (!error) return data;

    return [];
  };

  return { getAllMarkets, getAllProducts, getAllUnitMeasures, getAllProducers };
};
