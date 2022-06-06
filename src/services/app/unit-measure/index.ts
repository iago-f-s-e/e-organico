import { endpoints } from '@src/constants/endpoints';
import { UnitMeasure } from '@src/store/slices/unit-measure/types';
import { httpClientGET } from '../../http-client';

export function getAllUnitMeasures(): Promise<UnitMeasure[]> {
  return httpClientGET<UnitMeasure[]>(endpoints.unitMeasure.GET_ALL);
}
