import React, { FC } from 'react';
import { TransactionsConsumerStack } from '@src/@types/routes';
import { createStackNavigator } from '@react-navigation/stack';

import * as Consumer from '@src/pages/app/consumer';

const Stack = createStackNavigator<TransactionsConsumerStack>();

export type TransactionsConsumerScreens = 'transactions-consumer';

export const TransactionsConsumerRoutes: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fefffe' },
      }}
    >
      <Stack.Screen name="transactions-consumer" component={Consumer.Transactions} />
    </Stack.Navigator>
  );
};
