import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppBottomTab } from '@src/@types/routes';
import { MyBottomTabBar } from '@src/components';
import { ConsumerRoutes, ConsumerScreens } from './consumer';
import { ProducerScreens } from './producer';
import { TransactionsRoutes } from './transactions';

export type AppTabScreens = 'main' | 'transactions';

const Tab = createBottomTabNavigator<AppBottomTab>();

export type AppConsumerScreens = AppTabScreens | ConsumerScreens;

export type AppProducerScreens = AppTabScreens | ProducerScreens;

// TODO: criar bottom tab navigation
// TODO: verificar tipo de usuário e redenrizar condicionalmente
export const AppRoutes: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyBottomTabBar {...props} />}
    >
      <Tab.Screen name="main" component={ConsumerRoutes} />
      <Tab.Screen name="transactions" component={TransactionsRoutes} />
    </Tab.Navigator>
  );
};
