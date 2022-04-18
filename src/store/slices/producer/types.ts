import { PropertyImage } from '../image/types';
import { Market } from '../market/types';
import { ProductDetail } from '../product/types';
import { UserDetail } from '../user/types';

export type CertificationType = 'IN CONVERSION' | 'AUDIT' | 'OCS' | 'SPG';

export type ProducerType = 'producer';

export type ProducerDetail = UserDetail & {
  markets: Market[];
  products: ProductDetail[];
  propertyImages: PropertyImage[];
};
