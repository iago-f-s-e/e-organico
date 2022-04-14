import React, { FC } from 'react';

import icon from '@src/assets/icons/registered.png';
import { useAppNavigation } from '@src/hooks';
import * as S from './styles';

// TODO: verificar o tipo de usuário e renderizar "acessar o app ou perfil em analise"

export const Finished: FC = () => {
  const { navigateTo } = useAppNavigation();

  const handleAccessApp = () => {
    // TODO: limpar storage

    return navigateTo<'auth'>('login');
  };

  return (
    <S.FinishedContainer>
      <S.ImageContainer>
        <S.Image source={icon} />
      </S.ImageContainer>

      <S.Button onPress={handleAccessApp}>
        <S.Label>Acessar o app</S.Label>
      </S.Button>
    </S.FinishedContainer>
  );
};
