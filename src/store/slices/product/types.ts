export type UnitMeasure = {
  name: string;
};

export type Product = {
  id: string;
  name: string;
  unitMeasures: UnitMeasure[];
};
