import React from 'react';
import { Image } from 'react-native';
import defaultImage from '@src/assets/images/icon-user.png';
import { Props } from './types';

export const Avatar = ({ uri }: Props): JSX.Element => {
  const image = !uri?.length ? defaultImage : { uri };

  return <Image source={image} style={{ width: '100%', height: '100%', borderRadius: 100 }} />;
};
