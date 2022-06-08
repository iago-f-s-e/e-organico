import { UnitMeasure } from '@src/store/slices/unit-measure/types';
import { getAllUnitMeasures } from '@src/services/app';
import { translateGetError } from '@src/utils';
import { OnError, Response } from './types';

type HandleProduct = (onError: OnError) => {
  getAll: () => Promise<Response<UnitMeasure[]>>;
};

export const handleUnitMeasure: HandleProduct = (onError) => {
  return {
    getAll: async () => {
      try {
        const unitMeasures = await getAllUnitMeasures();

        return { data: unitMeasures, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },
  };
};
