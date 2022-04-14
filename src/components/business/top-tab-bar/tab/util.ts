import { ConsumerTabScreens } from '@src/routes/app/consumer/home';

const label: { [key in ConsumerTabScreens]: string } = {
  'consumer-markets': 'Feiras',
  'consumer-producers': 'Feirantes',
};

export const getLabel = (type: string): string => label[type];
