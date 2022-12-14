import React from 'react';

import { ImageDetail } from '@src/store/slices/image/types';
import * as S from './styles';
import * as C_S from '../common-styles';

type Props = {
  imageDetail: ImageDetail;
};

export const ListPropertyImage = ({ imageDetail }: Props): JSX.Element => {
  return (
    <S.Container>
      <C_S.Image source={{ uri: imageDetail.image }} />
    </S.Container>
  );
};
