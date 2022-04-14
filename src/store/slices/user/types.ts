import { Address } from '../address/types';
import { ConsumerType } from '../consumer/types';
import { ProducerType } from '../producer/types';

type Score = {
  transactions: number;
  rating: number;
};

export type UserType = ConsumerType | ProducerType;

export type User = {
  id: string;
  name: string;
  phone: string;
  imagePath: string;
  score: Score;
};

export type UserDetail = User & {
  address: Address;
};

export type AuthenticatedUser = UserDetail & {
  document: string;
  email: string;
};
