import React, { FC } from 'react';
import { StatusBar, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import * as Work from '@expo-google-fonts/work-sans';

import { Toast } from '@src/components';
import { colorSystem } from '@src/styles';
import { store, persistor } from './src/store';
import { EntryPoint } from './src';

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
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor={colorSystem.others._20WindowTint}
          />
          <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }}>
              <Toast />
              <EntryPoint />
            </KeyboardAvoidingView>
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
