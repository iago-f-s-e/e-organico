import React, { FC } from 'react';
import { TransactionsStack } from '@src/@types/routes';
import { createStackNavigator } from '@react-navigation/stack';

import * as Consumer from '@src/pages/app/consumer';

const Stack = createStackNavigator<TransactionsStack>();

export const ConsumerTransactionsRoutes: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fefffe' },
      }}
    >
      <Stack.Screen name="transactions" component={Consumer.Transactions} />
    </Stack.Navigator>
  );
};
