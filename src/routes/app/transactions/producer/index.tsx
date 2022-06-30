import React, { FC } from 'react';
import { ProducerTransactionTopTab } from '@src/@types/routes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import * as C from '@src/components';

import { colors } from '@src/config/theme';
import * as Producer from '@src/pages/app/producer';
import * as C_S from '../../common-styles';

const Tab = createMaterialTopTabNavigator<ProducerTransactionTopTab>();

export type ProducerTransactionTabScreens =
  | 'producer-transaction-separate'
  | 'producer-transaction-in-progress';

export const ProducerTransactionsRoutes: FC = () => {
  return (
    <C_S.Container>
      <C.Header title="Carrinho de compras" />

      <Tab.Navigator
        tabBar={(props) => <C.TopTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: colors.main.secondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: colors.main.primary },
        }}
      >
        <Tab.Screen
          name="producer-transaction-separate"
          component={Producer.TransactionsSeparation}
        />
        <Tab.Screen
          name="producer-transaction-in-progress"
          component={Producer.TransactionsSeparation}
        />
      </Tab.Navigator>
    </C_S.Container>
  );
};
