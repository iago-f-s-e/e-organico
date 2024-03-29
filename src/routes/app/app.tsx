import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppBottomTab } from '@src/@types/routes';
import { MyBottomTabBar } from '@src/components';
import { useAppSelector } from '@src/store';
import { ConsumerRoutes, ConsumerScreens } from './consumer';
import { ProducerRoutes, ProducerScreens } from './producer';
import {
  TransactionsRoutes,
  ProducerTransactionTabScreens,
  ConsumerTransactionTabScreens,
} from './transactions';

export type AppTabScreens = 'main' | 'transactions';

const Tab = createBottomTabNavigator<AppBottomTab>();

export type AppConsumerScreens = AppTabScreens | ConsumerScreens;

export type AppProducerScreens =
  | AppTabScreens
  | ProducerScreens
  | ProducerTransactionTabScreens
  | ConsumerTransactionTabScreens;

// TODO: criar bottom tab navigation
export const AppRoutes: FC = () => {
  const { current } = useAppSelector((state) => state);

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyBottomTabBar {...props} />}
    >
      <Tab.Screen
        name="main"
        component={current.user.userType === 'consumer' ? ConsumerRoutes : ProducerRoutes}
      />
      <Tab.Screen name="transactions" component={TransactionsRoutes} />
    </Tab.Navigator>
  );
};
