import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { colorSystem } from '@src/styles';
import { AppTabScreens } from '@src/routes/app';

type GetIcon = (name: string, isFocused: boolean) => JSX.Element;

type Icons = { [key in AppTabScreens]: (isFocused: boolean) => JSX.Element };

const icon: Icons = {
  transactions: (isFocused: boolean) => (
    <FontAwesome5
      name="shopping-basket"
      size={22}
      color={isFocused ? colorSystem.main.primary : colorSystem.basic.grey}
    />
  ),

  main: (isFocused: boolean) => (
    <AntDesign name="home" size={22} color={isFocused ? colorSystem.main.primary : colorSystem.basic.grey} />
  ),
};

const handleGetIcon = (key: string) => (key in icon ? icon[key] : (_: boolean) => <></>);

export const getIcon: GetIcon = (name, isFocused) => handleGetIcon(name)(isFocused);
