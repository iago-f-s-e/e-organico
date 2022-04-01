import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@src/config/theme';
import { IconType } from '../types';

export const getIcon = (type: IconType): JSX.Element => {
  if (type === 'off') return null;

  return <AntDesign name="left" size={24} color={colors.basic.white} />;
};
