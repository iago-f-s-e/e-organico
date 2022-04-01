import React, { FC } from 'react';

import icon from '@src/assets/icons/registered.png';
import * as S from './styles';

export const Finished: FC = () => {
  return (
    <S.FinishedContainer>
      <S.ImageContainer>
        <S.Image source={icon} />
      </S.ImageContainer>

      <S.Button
        onPress={() => {
          // TODO: navegar ate o login
        }}
      >
        <S.Label>Acessar o app</S.Label>
      </S.Button>
    </S.FinishedContainer>
  );
};
