import { Address } from '../address/types';
import { MinimalProducer } from '../producer/types';

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

export type Workday = {
  id: string;
  weekday: EUDay;
  opening: string;
  closing: string;
};

// TODO: mover isOpen para esse type
export type Market = {
  id: string;
  name: string;
  image: string;
  address: Address;
  workdays: Workday[];
};

export type MarketDetail = Market & {
  producers: MinimalProducer[];
  isOpen: boolean;
};
