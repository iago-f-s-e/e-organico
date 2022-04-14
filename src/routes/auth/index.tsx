import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '@src/pages/auth/login';
import { Terms } from '@src/pages/auth/terms';
import * as SignUp from '@src/pages/auth/sign-up';
import { AuthStack } from '@src/@types/routes';
import { AppRoutes } from '../app';

const Stack = createStackNavigator<AuthStack>();

export type AuthScreens =
  | 'app'
  | 'login'
  | 'terms'
  | 'sign-up-user-type'
  | 'sign-up-identifiers'
  | 'sign-up-credentials'
  | 'sign-up-address'
  | 'sign-up-property-images'
  | 'sign-up-select-types'
  | 'sign-up-finished'
  | 'sign-up-market'
  | 'sign-up-initial-product';

export const AuthRoutes: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fefffe' },
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="terms" component={Terms} />
      <Stack.Screen name="sign-up-user-type" component={SignUp.UserType} />
      <Stack.Screen name="sign-up-identifiers" component={SignUp.Identifiers} />
      <Stack.Screen name="sign-up-credentials" component={SignUp.Credentials} />
      <Stack.Screen name="sign-up-address" component={SignUp.Address} />
      <Stack.Screen name="sign-up-property-images" component={SignUp.PropertyImages} />
      <Stack.Screen name="sign-up-select-types" component={SignUp.SelectTypes} />
      <Stack.Screen name="sign-up-market" component={SignUp.Market} />
      <Stack.Screen name="sign-up-initial-product" component={SignUp.InitialProduct} />
      <Stack.Screen name="sign-up-finished" component={SignUp.Finished} />
      <Stack.Screen name="app" component={AppRoutes} />
    </Stack.Navigator>
  );
};
