import { Transaction } from '@src/store/slices/transaction/types';
import React, { FC } from 'react';

import * as C from '@src/components';
import * as C_S from '../../common-styles';

const imagePath =
  'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

const transactions: Transaction[] = [
  {
    id: 'transaction-id',
    number: 1,
    producer: null,
    type: 'pick',
    status: 'waiting-for-confirmation-from-the-producer',
    total: '5.00',
    createdAt: '2022-04-29T20:14:12.021Z',
    productQuantity: 1,
    market: {
      id: 'market-id',
      name: 'feira-name',
      imagePath,
      wordDays: [],
      address: null,
    },
    selectedDay: {
      close: null,
      open: null,
      day: 'MONDAY',
    },
    consumer: {
      id: 'consumer-id',
      imagePath,
      name: 'consumer-name',
      phone: '99999999999',
      score: {
        rating: 5,
        transactions: 0,
      },
    },
  },
];

// TODO: renderizar empty component
export const PendingTransactions: FC = () => {
  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Buscar</C_S.Title>
        </C_S.TitleContainer>
        <C.Map
          data={transactions}
          render={(value, index) => (
            <C.ListProducerTransaction showWaitingTime transaction={value} key={index.toString()} />
          )}
        />
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
