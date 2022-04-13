import { Address } from '../address/types';

type Score = {
  transactions: number;
  rating: number;
};

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
