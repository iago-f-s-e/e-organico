import React, { FC, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProducerTopTab } from '@src/@types/routes';

import { colors } from '@src/config/theme';

import { showBottomTab, useAppDispatch } from '@src/store';
import { useAppNavigation } from '@src/hooks';
import * as Producer from '@src/pages/app/producer';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

const Tab = createMaterialTopTabNavigator<ProducerTopTab>();

export type ProducerTabScreens = 'producer-stall' | 'producer-products';

export const ProducerHome: FC = () => {
  const appDispatch = useAppDispatch();

  const { onFocus } = useAppNavigation();

  useEffect(() => {
    const focus = onFocus(() => appDispatch(showBottomTab()));

    return focus;
  }, []); // eslint-disable-line

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
        <Tab.Screen name="producer-products" component={Producer.Products} />
        <Tab.Screen name="producer-stall" component={Producer.Products} />
      </Tab.Navigator>
    </C_S.Container>
  );
};
