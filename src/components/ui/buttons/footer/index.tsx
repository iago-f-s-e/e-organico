import React, { FC } from 'react';

import { Props } from './types';
import * as S from './styles';

export const FooterButton: FC<Props> = ({ handle, label, disabled }) => {
  return (
    <S.Container onPress={handle} disabled={disabled}>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};
