import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ConsumerTopTab } from '@src/@types/routes';

import { colors } from '@src/config/theme';

import * as Consumer from '@src/pages/app/consumer';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

const Tab = createMaterialTopTabNavigator<ConsumerTopTab>();

export type ConsumerTabScreens = 'consumer-markets' | 'consumer-producers';

export const ConsumerHome: FC = () => {
  return (
    <C_S.Container>
      <C.Header title="Inicio" />

      <Tab.Navigator
        tabBar={(props) => <C.TopTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: colors.main.secondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: colors.main.primary },
        }}
      >
        <Tab.Screen name="consumer-markets" component={Consumer.Markets} />
        <Tab.Screen name="consumer-producers" component={Consumer.Producers} />
      </Tab.Navigator>
    </C_S.Container>
  );
};
