import { Transaction } from '../transaction/types';
import { UnitMeasure } from '../unit-measure/types';

// TODO: criar propriedade de imagem
export type Product = {
  id: string;
  name: string;
  type: string;
  image: string;
};

export type ProductDetail = {
  id: string;
  product: Product;
  price: string;
  stock: string;
  unitMeasure: UnitMeasure;
  harvestDate: Date;
};

export type ProductWithTransactions = ProductDetail & {
  lastTransactions: Transaction[];
};
