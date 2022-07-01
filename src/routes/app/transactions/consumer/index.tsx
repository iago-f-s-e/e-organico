import React, { FC } from 'react';
import { ConsumerTransactionTopTab } from '@src/@types/routes';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as Consumer from '@src/pages/app/consumer';
import * as C from '@src/components';
import { colors } from '@src/config/theme';
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
          tabBarActiveTintColor: colors.main.secondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: colors.main.primary },
        }}
      >
        <Tab.Screen
          name="consumer-transaction-in-progress"
          component={Consumer.TransactionsInProgress}
        />
        <Tab.Screen
          name="consumer-transaction-concluded"
          component={Consumer.TransactionsConcluded}
        />
      </Tab.Navigator>
    </C_S.Container>
  );
};
