import React, { FC } from 'react';
import { ProducerStack } from '@src/@types/routes';
import { createStackNavigator } from '@react-navigation/stack';

import * as Producer from '@src/pages/app/producer';
import { ProducerHome } from './home';

const Stack = createStackNavigator<ProducerStack>();

export type ProducerScreens = 'home' | 'transaction';

export const ProducerRoutes: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fefffe' },
      }}
    >
      <Stack.Screen name="home" component={ProducerHome} />
      <Stack.Screen name="transaction" component={Producer.Transaction} />
    </Stack.Navigator>
  );
};
