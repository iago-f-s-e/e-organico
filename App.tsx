import React, { FC } from 'react';

import { useFonts } from 'expo-font';
import {
  WorkSans_300Light,
  WorkSans_500Medium,
  WorkSans_700Bold,
  WorkSans_600SemiBold,
} from '@expo-google-fonts/work-sans';

import { SignUp } from '@root/pages';

// TODO: corrigir status bar

const App: FC = () => {
  const [loaded] = useFonts({
    WorkSansLight: WorkSans_300Light,
    WorkSansMedium: WorkSans_500Medium,
    WorkSansSemi: WorkSans_600SemiBold,
    WorkSansBold: WorkSans_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <StatusBar backgroundColor="transparent" style="auto" /> */}
      <SignUp />
    </>
  );
};

export default App;
