import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppBottomTab } from '@src/@types/routes/types';
import { MyBottomTabBar } from '@src/components';
import { ConsumerRoutes } from './consumer';

export type AppTabScreens = 'main';

const Tab = createBottomTabNavigator<AppBottomTab>();

// TODO: criar bottom tab navigation
// TODO: verificar tipo de usuário e redenrizar condicionalmente
export const AppRoutes: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyBottomTabBar {...props} />}
    >
      <Tab.Screen name="main" component={ConsumerRoutes} />
    </Tab.Navigator>
  );
};
