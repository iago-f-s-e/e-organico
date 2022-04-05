import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { useFonts } from 'expo-font';
import * as Work from '@expo-google-fonts/work-sans';

import { PropertyImages } from '@src/pages';
import { Toast } from '@src/components';
import { KeyboardAvoidingView } from 'react-native';
import { store, persistor } from './src/store';

// TODO: corrigir status bar

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
      {/* <StatusBar backgroundColor="transparent" style="auto" /> */}
      <PersistGate loading={null} persistor={persistor}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Toast />
          <PropertyImages />
        </KeyboardAvoidingView>
      </PersistGate>
    </Provider>
  );
};

export default App;
