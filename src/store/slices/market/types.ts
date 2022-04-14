import { Address } from '../address/types';
import { User } from '../user/types';

export type EUDay =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

export type PTDay =
  | 'segunda-feira'
  | 'terça-feira'
  | 'quarta-feira'
  | 'quinta-feira'
  | 'sexta-feira'
  | 'sábado'
  | 'domingo';

export type WorkDay = {
  day: EUDay;
  open: string;
  close: string;
};

// TODO: mover isOpen para esse type
export type Market = {
  id: string;
  name: string;
  address: Address;
  wordDays: WorkDay[];
};

export type MarketDetail = Market & {
  producers: User[];
  isOpen: boolean;
};
