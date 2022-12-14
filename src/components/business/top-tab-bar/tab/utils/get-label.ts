import { ConsumerTabScreens } from '@src/routes/app/consumer/home';
import { ProducerTabScreens } from '@src/routes/app/producer/home';
import { ConsumerTransactionTabScreens } from '@src/routes/app/transactions/consumer';

const label: {
  [key in ConsumerTabScreens | ProducerTabScreens | ConsumerTransactionTabScreens]: string;
} = {
  'consumer-markets': 'Feiras',
  'consumer-producers': 'Feirantes',
  'producer-stall': 'Barraquinha',
  'producer-products': 'Produtos',
  'consumer-transaction-concluded': 'Concluídos',
  'consumer-transaction-in-progress': 'Em andamento',
};

export const getLabel = (type: string): string => label[type];
