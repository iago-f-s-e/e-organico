import { AddressModel } from '@src/types/models';
import { Image } from '../image/types';

export type SignUpPayload = {
  phone: string;
  name: string;
  email: string;
  document: string;
  password: string;
  image: Image;
  address: AddressModel;
};
