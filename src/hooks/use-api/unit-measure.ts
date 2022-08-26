import { UnitMeasure } from '@src/store/slices/unit-measure/types';
import * as services from '@src/services/app/unit-measure';
import { translateGetError } from '@src/utils';
import { OnError, Response } from './types';

type HandleProduct = (onError: OnError) => {
  getAll: () => Promise<Response<UnitMeasure[]>>;
};

export const handleUnitMeasure: HandleProduct = (onError) => {
  return {
    getAll: async () => {
      try {
        const unitMeasures = await services.getAllUnitMeasures();

        return { data: unitMeasures, error: null };
      } catch (error) {
        onError(translateGetError(error));

        return { data: null, error: error.message };
      }
    },
  };
};
