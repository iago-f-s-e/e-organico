import React, { FC } from 'react';

import { useAppSelector } from '@src/store';

import { ConsumerTransactionsRoutes } from './consumer';
import { ProducerTransactionsRoutes } from './producer';

export const TransactionsRoutes: FC = () => {
  const { current } = useAppSelector((state) => state);

  return current.user.userType === 'consumer' ? (
    <ConsumerTransactionsRoutes />
  ) : (
    <ProducerTransactionsRoutes />
  );
};
