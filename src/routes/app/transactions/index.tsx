import React, { FC } from 'react';
import { TransactionsStack } from '@src/@types/routes';
import { createStackNavigator } from '@react-navigation/stack';

import * as Consumer from '@src/pages/app/consumer';
import * as Producer from '@src/pages/app/producer';
import { useAppSelector } from '@src/store';

const Stack = createStackNavigator<TransactionsStack>();

export const TransactionsRoutes: FC = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fefffe' },
      }}
    >
      <Stack.Screen
        name="transactions"
        component={user.userType === 'consumer' ? Consumer.Transactions : Producer.Transactions}
      />
    </Stack.Navigator>
  );
};
