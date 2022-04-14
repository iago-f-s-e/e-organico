import { AppTabScreens } from '@src/routes/app';

const label: { [key in AppTabScreens]: string } = {
  main: 'Inicio',
};

export const getLabel = (type: string): string => label[type];
