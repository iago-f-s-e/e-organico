import React, { FC } from 'react';
import { ConsumerStack } from '@src/@types/routes/types';
import { createStackNavigator } from '@react-navigation/stack';

import { ConsumerHome } from './home';

const Stack = createStackNavigator<ConsumerStack>();

export type ConsumerScreens = 'home';

export const ConsumerRoutes: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fefffe' },
      }}
    >
      <Stack.Screen name="home" component={ConsumerHome} />
    </Stack.Navigator>
  );
};
