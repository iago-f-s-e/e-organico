import { Address } from '../address/types';
import { Image } from '../image/types';

export type SignUpPayload = {
  phone: string;
  name: string;
  email: string;
  document: string;
  password: string;
  image: Image;
  address: Address;
};
