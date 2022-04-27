import React from 'react';

import * as S from './styles';

export const Selected = (): JSX.Element => {
  return (
    <S.Container>
      <S.Label style={{ transform: [{ rotateZ: '-20deg' }] }}>selecionado</S.Label>
    </S.Container>
  );
};
