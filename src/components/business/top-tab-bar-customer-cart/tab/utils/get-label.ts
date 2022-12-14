import { ConsumerCartTabScreens } from '@src/routes/app/consumer/cart';

const label: { [key in ConsumerCartTabScreens]: string } = {
  'consumer-cart-products': 'Produtos',
  'consumer-cart-address': 'Endereço',
  'consumer-cart-payment': 'Pagamento',
};

export const getLabel = (type: string): string => label[type];
