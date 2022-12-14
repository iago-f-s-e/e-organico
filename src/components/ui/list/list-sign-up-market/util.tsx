import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@src/config/theme';

export const getIcon = (selected: boolean, opened: boolean): JSX.Element => {
  if (selected) return <AntDesign name="checkcircleo" size={20} color={colors.basic.white} />;

  if (opened) return <AntDesign name="left" size={20} color={colors.main.primary} />;

  return <AntDesign name="down" size={20} color={colors.main.primary} />;
};
