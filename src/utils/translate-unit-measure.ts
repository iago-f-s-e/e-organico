import { UnitMeasureTypes } from '@src/store/slices/product/types';

const unitMeasures: { [type in UnitMeasureTypes]: string } = {
  L: 'Litro',
  duzia: 'Duzia',
  g: 'Grama',
  kg: 'Kilo',
  mg: 'Miligrama',
  penca: 'Penca',
  un: 'Unidade',
};

export const translateUnitMeasure = (type: UnitMeasureTypes): string => unitMeasures[type];
