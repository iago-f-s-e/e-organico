import React, { FC } from 'react';

import { useAppSelector } from '@src/store';

import { ConsumerTransactionsRoutes } from './consumer';
import { ProducerTransactionsRoutes } from './producer';

export const TransactionsRoutes: FC = () => {
  const { user } = useAppSelector((state) => state.user);

  return user.userType === 'consumer' ? (
    <ConsumerTransactionsRoutes />
  ) : (
    <ProducerTransactionsRoutes />
  );
};
