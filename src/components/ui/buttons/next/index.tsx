import React from 'react';

import * as S from './styles';
import { Props } from './types';

export const NextButton = ({ handle }: Props): JSX.Element => {
  return (
    <S.Container onPress={handle}>
      <S.Label>Próximo</S.Label>
    </S.Container>
  );
};
