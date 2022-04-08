import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import * as Work from '@expo-google-fonts/work-sans';

import { Toast } from '@src/components';
import { KeyboardAvoidingView } from 'react-native';
import { store, persistor } from './src/store';
// import { EntryPoint } from './src';
import { InitialProduct } from './src/pages/auth/sign-up/initial-product';

const App: FC = () => {
  const [loaded] = useFonts({
    WorkSansLight: Work.WorkSans_300Light,
    WorkSansMedium: Work.WorkSans_500Medium,
    WorkSansSemi: Work.WorkSans_600SemiBold,
    WorkSansBold: Work.WorkSans_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
          <KeyboardAvoidingView style={{ flex: 1 }}>
            <Toast />
            <InitialProduct />
            {/* <EntryPoint /> */}
          </KeyboardAvoidingView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
