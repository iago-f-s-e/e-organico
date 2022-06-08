import { Product } from '../product/types';
import { Transaction } from '../transaction/types';
import { UnitMeasure } from '../unit-measure/types';

export type MinimalProducerProduct = {
  id: string;
  image: string;
  name: string;
  price: string;
  unitMeasure: UnitMeasure;
};

export type ProducerProduct = {
  id: string;
  product: Product;
  price: string;
  stock: string;
  unitMeasure: UnitMeasure;
  harvestDate: Date;
};

export type ProducerProductDetail = MinimalProducerProduct & {
  stock: string;
  unitMeasure: UnitMeasure;
  harvestDate: Date;
};

export type ProductWithTransactions = ProducerProduct & {
  lastTransactions: Transaction[];
};
