import React, { FC } from 'react';
import { ProducerStack } from '@src/@types/routes';
import { createStackNavigator } from '@react-navigation/stack';

import * as Producer from '@src/pages/app/producer';
import { ProducerHome } from './home';

const Stack = createStackNavigator<ProducerStack>();

export type ProducerScreens = 'home' | 'producer-transaction' | 'producer-product';

export const ProducerRoutes: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fefffe' },
      }}
    >
      <Stack.Screen name="home" component={ProducerHome} />
      <Stack.Screen name="producer-transaction" component={Producer.Transaction} />
      <Stack.Screen name="producer-product" component={Producer.Product} />
    </Stack.Navigator>
  );
};
