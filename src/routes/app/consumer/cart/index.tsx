import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ConsumerCartTopTab } from '@src/@types/routes';

import { colors } from '@src/config/theme';

import * as Consumer from '@src/pages/app/consumer';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

const Tab = createMaterialTopTabNavigator<ConsumerCartTopTab>();

export type ConsumerCartTabScreens =
  | 'consumer-cart-products'
  | 'consumer-cart-address'
  | 'consumer-cart-payment';

export const ConsumerCart: FC = () => {
  return (
    <C_S.Container>
      <C.Header title="Carrinho de compras" />

      <Tab.Navigator
        tabBar={(props) => <C.TopTabBarCustomerCart {...props} />}
        screenOptions={{
          tabBarActiveTintColor: colors.main.secondary,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: colors.main.primary },
        }}
      >
        <Tab.Screen name="consumer-cart-products" component={Consumer.Cart.Products} />
        <Tab.Screen name="consumer-cart-address" component={Consumer.Producers} />
        <Tab.Screen name="consumer-cart-payment" component={Consumer.Producers} />
      </Tab.Navigator>
    </C_S.Container>
  );
};
