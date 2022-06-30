import { ConsumerTabScreens } from '@src/routes/app/consumer/home';
import { ProducerTabScreens } from '@src/routes/app/producer/home';
import { ProducerTransactionTabScreens } from '@src/routes/app/transactions/producer';

const label: {
  [key in ConsumerTabScreens | ProducerTabScreens | ProducerTransactionTabScreens]: string;
} = {
  'consumer-markets': 'Feiras',
  'consumer-producers': 'Feirantes',
  'producer-pending-transactions': 'Pedidos pendentes',
  'producer-products': 'Produtos',
  'producer-transaction-in-progress': 'Pedidos em andamento',
  'producer-transaction-separate': 'Separação de pedidos',
};

export const getLabel = (type: string): string => label[type];
