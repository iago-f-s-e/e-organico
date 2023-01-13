import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colorSystem } from '@src/styles';

export const getIcon = (selected: boolean, opened: boolean): JSX.Element => {
  if (selected) return <AntDesign name="checkcircleo" size={20} color={colorSystem.basic.white} />;

  if (opened) return <AntDesign name="left" size={20} color={colorSystem.main.primary} />;

  return <AntDesign name="down" size={20} color={colorSystem.main.primary} />;
};
