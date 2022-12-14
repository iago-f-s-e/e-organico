import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Props } from './types';

export const Loading = ({ color, sizeType, style }: Props): JSX.Element => {
  return <ActivityIndicator color={color} size={sizeType} style={style} />;
};
