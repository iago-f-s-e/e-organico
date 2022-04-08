import { EUDay, PTDay } from '@src/store/slices/market/types';

enum ToPTDay {
  MONDAY = 'segunda-feira',
  TUESDAY = 'terça-feira',
  WEDNESDAY = 'quarta-feira',
  THURSDAY = 'quinta-feira',
  FRIDAY = 'sexta-feira',
  SATURDAY = 'sábado',
  SUNDAY = 'domingo',
}

enum ToEuDay {
  'terça-feira' = 'TUESDAY',
  'quarta-feira' = 'WEDNESDAY',
  'quinta-feira' = 'THURSDAY',
  'sexta-feira' = 'FRIDAY',
  'sábado' = 'SATURDAY',
  'domingo' = 'SUNDAY',
}

export const toPTDay = (day: EUDay): PTDay => ToPTDay[day];

export const toEUDay = (day: PTDay): EUDay => ToEuDay[day];
