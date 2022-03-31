import { IconType } from '../types';

export const getLabel = (type: IconType): string => {
  if (type === 'off') return '';

  return 'voltar';
};
