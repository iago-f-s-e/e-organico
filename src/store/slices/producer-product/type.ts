import { Product } from '../product/types';
import { UnitMeasure } from '../unit-measure/types';

type MutualProps = {
  id: string;
  price: string;
  stock: string;
  unitMeasure: UnitMeasure;
};

export type MinimalProducerProduct = MutualProps & {
  image: string;
  name: string;
};

export type ProducerProduct = MutualProps & {
  product: Product;
  harvestDate: Date;
};

export type ProducerProductDetail = MinimalProducerProduct & {
  harvestDate: Date;
};
