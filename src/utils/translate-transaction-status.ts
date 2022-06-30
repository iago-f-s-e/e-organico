import { TransactionStatus } from '@src/store/slices/transaction/types';
import { UserType } from '@src/store/slices/user/types';

const producerStatus: { [key in TransactionStatus]: string } = {
  'canceled-by-consumer': 'cancelado pelo cliente',
  'canceled-by-producer': 'cancelado',
  'confirmed-by-consumer': 'confirmado pelo cliente',
  'confirmed-by-producer': 'confirmado',
  'en-route': 'em rota de entrega',
  'paid-online': 'pago online',
  'waiting-for-confirmation-from-the-producer': 'aguardando a confirmação',
  'waiting-for-consumer-to-withdraw': 'aguardando o cliente retirar',
  'waiting-for-payment': 'aguardando o pagamento',
  'in-separation': 'aguardando separação dos produtos',
  delivered: 'entregue',
};

const consumerStatus: { [key in TransactionStatus]: string } = {
  'canceled-by-producer': 'cancelado pelo feirante',
  'canceled-by-consumer': 'cancelado',
  'confirmed-by-producer': 'confirmado pelo feirante',
  'confirmed-by-consumer': 'confirmado',
  'en-route': 'em rota de entrega',
  'paid-online': 'pago online',
  'waiting-for-confirmation-from-the-producer': 'aguardando a confirmação do feirante',
  'waiting-for-consumer-to-withdraw': 'aguardando a retirada',
  'waiting-for-payment': 'aguardando o pagamento',
  'in-separation': 'aguardando o feirante separar os produtos',
  delivered: 'entregue',
};

export const translateTransactionStatus = (type: string, userType: UserType): string =>
  userType === 'producer' ? producerStatus[type] : consumerStatus[type];
