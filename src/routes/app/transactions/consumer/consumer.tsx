import React, { FC } from 'react';
import { ConsumerTransactionTopTab } from '@src/@types/routes';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as Consumer from '@src/pages/app/consumer';
import * as C from '@src/components';
import { colorSystem } from '@src/styles';
import * as C_S from '../../common-styles';

const Tab = createMaterialTopTabNavigator<ConsumerTransactionTopTab>();

export type ConsumerTransactionTabScreens =
  | 'consumer-transaction-in-progress'
  | 'consumer-transaction-concluded';

export const ConsumerTransactionsRoutes: FC = () => {
  return (
    <C_S.Container>
      <C.Header title="Pedidos" hideBackButton />

      <Tab.Navigator
        tabBar={(props) => <C.TopTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: colorSystem.main.secondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: colorSystem.main.primary },
        }}
      >
        <Tab.Screen
          name="consumer-transaction-in-progress"
          component={Consumer.TransactionsInProgress}
        />
        <Tab.Screen
          name="consumer-transaction-concluded"
          component={Consumer.ConcludedTransactions}
        />
      </Tab.Navigator>
    </C_S.Container>
  );
};
