import React, { FC } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Terms } from '@root/pages';

const App: FC = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" style="auto" />
      <Terms />
    </>
  );
};

export default App;
