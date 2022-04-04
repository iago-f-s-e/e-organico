import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { useFonts } from 'expo-font';
import * as Work from '@expo-google-fonts/work-sans';

import { Identifiers } from '@src/pages';
import { Toast } from '@src/components';
import { KeyboardAvoidingView } from 'react-native';
import { store } from './src/store';

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
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <Toast />
        <Identifiers />
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default App;
