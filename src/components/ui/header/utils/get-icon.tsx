import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colorSystem } from '@src/styles';
import { IconType } from '../types';

export const getIcon = (type: IconType): JSX.Element => {
  if (type === 'off') return null;

  return <AntDesign name="left" size={24} color={colorSystem.basic.white} />;
};
