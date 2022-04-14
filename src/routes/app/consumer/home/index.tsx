import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ConsumerTopTab } from '@src/@types/routes/types';

import * as Consumer from '@src/pages/app/consumer';
import { colors } from '@src/config/theme';
import { TopTabBar } from '@src/components';
import * as C_S from '../../common-styles';

const Tab = createMaterialTopTabNavigator<ConsumerTopTab>();

export type ConsumerTabScreens = 'consumer-market' | 'consumer-producer';

export const ConsumerHome: FC = () => {
  return (
    <C_S.Container>
      <C_S.Header>
        <C_S.HeaderTitle>Inicio</C_S.HeaderTitle>
      </C_S.Header>

      <Tab.Navigator
        tabBar={(props) => <TopTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: colors.main.secondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: colors.main.primary },
        }}
      >
        <Tab.Screen name="consumer-market" component={Consumer.Markets} />
        <Tab.Screen name="consumer-producer" component={Consumer.Producers} />
      </Tab.Navigator>
    </C_S.Container>
  );
};
