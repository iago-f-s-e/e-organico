import { endpoints } from '@src/constants/endpoints';
import { UnitMeasure } from '@src/store/slices/unit-measure/types';
import { httpGET } from '../../http-client';

export function getAllUnitMeasures(): Promise<UnitMeasure[]> {
  return httpGET<UnitMeasure[]>(endpoints.unitMeasure.GET_ALL);
}
