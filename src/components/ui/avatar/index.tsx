import React from 'react';
import { Image } from 'react-native';
import { Props } from './types';

import defaultImage from '../../../assets/images/icon-user.png';

export const Avatar = ({ uri }: Props): JSX.Element => {
  const image = !uri?.length ? defaultImage : { uri };

  return <Image source={image} style={{ width: '100%', height: '100%', borderRadius: 100 }} />;
};
