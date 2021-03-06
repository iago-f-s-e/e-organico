import React, { FC } from 'react';
import { ConsumerStack } from '@src/@types/routes';
import { createStackNavigator } from '@react-navigation/stack';

import * as Consumer from '@src/pages/app/consumer';
import { ConsumerHome } from './home';
import { ConsumerCart, ConsumerCartTabScreens } from './cart';

const Stack = createStackNavigator<ConsumerStack>();

export type ConsumerScreens =
  | 'home'
  | 'consumer-market'
  | 'consumer-producer'
  | 'consumer-product'
  | 'consumer-cart'
  | 'consumer-payment-methods'
  | 'consumer-transaction'
  | ConsumerCartTabScreens;

export const ConsumerRoutes: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fefffe' },
      }}
    >
      <Stack.Screen name="home" component={ConsumerHome} />
      <Stack.Screen name="consumer-market" component={Consumer.Market} />
      <Stack.Screen name="consumer-producer" component={Consumer.Producer} />
      <Stack.Screen name="consumer-product" component={Consumer.Product} />
      <Stack.Screen name="consumer-payment-methods" component={Consumer.PaymentMethods} />
      <Stack.Screen name="consumer-cart" component={ConsumerCart} />
      <Stack.Screen name="consumer-transaction" component={Consumer.Transaction} />
    </Stack.Navigator>
  );
};
