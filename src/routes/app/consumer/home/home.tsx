import React, { FC, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ConsumerTopTab } from '@src/@types/routes';

import { colors } from '@src/config/theme';

import { showBottomTab, useAppDispatch } from '@src/store';
import { useAppNavigation } from '@src/hooks';
import * as Consumer from '@src/pages/app/consumer';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

const Tab = createMaterialTopTabNavigator<ConsumerTopTab>();

export type ConsumerTabScreens = 'consumer-markets' | 'consumer-producers';

export const ConsumerHome: FC = () => {
  const appDispatch = useAppDispatch();

  const { onFocus } = useAppNavigation();

  useEffect(() => {
    const focus = onFocus(() => appDispatch(showBottomTab()));

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Inicio" hideBackButton showLogout />

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
