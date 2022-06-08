import { Address } from '../address/types';
import { Market } from '../market/types';
import { MinimalProducerProduct } from '../producer-product/type';
import { MinimalProperty } from '../property/types';

export type CertificationType = 'IN CONVERSION' | 'AUDIT' | 'OCS' | 'SPG';

export type ProducerType = 'producer';

export type MinimalProducer = {
  id: string;
  name: string;
  image: string;
  score: {
    transactions: number;
    rating: number;
  };
};

export type ProducerDetail = MinimalProducer & {
  address: Address;
  markets: Market[];
  products: MinimalProducerProduct[];
  property: MinimalProperty;
};
