import React from 'react';
import { PropertyImage } from '@src/store/slices/image/types';

import * as S from './styles';

type Props = {
  propertyImage: PropertyImage;
};

export const ListPropertyImage = ({ propertyImage }: Props): JSX.Element => {
  return (
    <S.Container>
      <S.Image source={{ uri: propertyImage.imagePath }} />
    </S.Container>
  );
};
