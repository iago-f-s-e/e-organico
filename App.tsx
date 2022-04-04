import React, { FC } from 'react';

import { useFonts } from 'expo-font';
import * as Work from '@expo-google-fonts/work-sans';

import { PropertyImages } from '@src/pages';

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
    <>
      {/* <StatusBar backgroundColor="transparent" style="auto" /> */}
      <PropertyImages />
    </>
  );
};

export default App;
