import React, { FC } from 'react';

import * as C from '@src/components';
import * as C_S from '../common-styles';
import * as S from './styles';

// TODO: criar navegação

export const UserType: FC = () => {
  return (
    <C_S.Container>
      <C.Header
        handle={() => {
          // TODO: navigation.goBack()
        }}
        iconType="navigate-go-back"
      />
      <C_S.Container>
        <S.UserTypeContainer>
          <S.Title>Você é</S.Title>

          <S.ButtonType>
            <S.Label>Comprador</S.Label>
          </S.ButtonType>

          <S.ButtonType>
            <S.Label>Produtor</S.Label>
          </S.ButtonType>
        </S.UserTypeContainer>
      </C_S.Container>
    </C_S.Container>
  );
};
