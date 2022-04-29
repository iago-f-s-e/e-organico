import { ConsumerTabScreens } from '@src/routes/app/consumer/home';
import { ProducerTabScreens } from '@src/routes/app/producer/home';

const label: { [key in ConsumerTabScreens | ProducerTabScreens]: string } = {
  'consumer-markets': 'Feiras',
  'consumer-producers': 'Feirantes',
  'producer-pending-transactions': 'Pedidos pendentes',
  'producer-products': 'Produtos',
};

export const getLabel = (type: string): string => label[type];
