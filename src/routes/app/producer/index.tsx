import React, { FC } from 'react';
import { ProducerStack } from '@src/@types/routes';
import { createStackNavigator } from '@react-navigation/stack';

import { ProducerHome } from './home';

const Stack = createStackNavigator<ProducerStack>();

export type ProducerScreens = 'home';

export const ProducerRoutes: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fefffe' },
      }}
    >
      <Stack.Screen name="home" component={ProducerHome} />
    </Stack.Navigator>
  );
};
