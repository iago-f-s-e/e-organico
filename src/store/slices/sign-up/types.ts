import { Address } from '../address/types';

type Image = {
  uri: string;
  base64: string;
};

export type SignUpPayload = {
  phone: string;
  name: string;
  email: string;
  document: string;
  password: string;
  image: Image;
  address: Address;
};
