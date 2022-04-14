import { ConsumerTabScreens } from '@src/routes/app/consumer/home';

const label: { [key in ConsumerTabScreens]: string } = {
  'consumer-market': 'Feiras',
  'consumer-producer': 'Feirantes',
};

export const getLabel = (type: string): string => label[type];
