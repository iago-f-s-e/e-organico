export type UnitMeasureTypes = 'un' | 'kg' | 'L' | 'mg' | 'g' | 'duzia' | 'penca';

export type UnitMeasure = {
  name: UnitMeasureTypes;
};

export type Product = {
  id: string;
  name: string;
  unitMeasures: UnitMeasure[];
};
