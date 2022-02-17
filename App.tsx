import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Login } from '@root/pages';

const App: FC = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" style="dark" />
      <Login />
    </>
  );
};

export default App;
