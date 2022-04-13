import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ConsumerTopTab } from '@src/@types/routes/types';

import * as Consumer from '@src/pages/app/consumer';

const Tab = createMaterialTopTabNavigator<ConsumerTopTab>();

export type ConsumerTabScreens = 'consumer-market' | 'consumer-producer';

export const ConsumerHome: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="consumer-market" component={Consumer.Market} />
      <Tab.Screen name="consumer-producer" component={Consumer.Producer} />
    </Tab.Navigator>
  );
};
