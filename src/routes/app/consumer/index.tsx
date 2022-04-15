import React, { FC } from 'react';
import { ConsumerStack } from '@src/@types/routes';
import { createStackNavigator } from '@react-navigation/stack';

import * as Consumer from '@src/pages/app/consumer';
import { ConsumerHome } from './home';

const Stack = createStackNavigator<ConsumerStack>();

export type ConsumerScreens = 'home' | 'consumer-market' | 'consumer-producer';

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
    </Stack.Navigator>
  );
};
