import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { IconType } from '../types';

export const getIcon = (type: IconType): JSX.Element => {
  if (type === 'off') return null;

  return <AntDesign name="arrowleft" size={25} color="black" />;
};
