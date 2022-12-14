import { ProducerTransactionTabScreens } from '@src/routes/app/transactions/producer';

const label: {
  [key in ProducerTransactionTabScreens]: string;
} = {
  'producer-transaction-pending': 'Pendente',
  'producer-transaction-in-progress': 'Em andamento',
  'producer-transaction-separate': 'Em separação',
  'producer-transaction-concluded': 'Concluídos',
};

export const getLabel = (type: string): string => label[type];
