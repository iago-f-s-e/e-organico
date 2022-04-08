import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@src/config/theme';

export const getIcon = (opened: boolean): JSX.Element => {
  if (opened) return <AntDesign name="left" size={20} color={colors.main.primary} />;

  return <AntDesign name="down" size={20} color={colors.main.primary} />;
};
