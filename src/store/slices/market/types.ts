// Monday (segunda-feira), Tuesday (terça-feira), Wednesday (quarta-feira), Thursday (quinta-feira), Friday (sexta-feira), Saturday (sábado), e Sunday (domingo).

import { Address } from '../address/types';

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

export type Market = {
  id: string;
  name: string;
  address: Address;
  wordDays: WorkDay[];
};
