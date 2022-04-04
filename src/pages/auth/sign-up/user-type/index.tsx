import React, { FC } from 'react';

import * as C from '@src/components';
import { changeSignUpUserType, useAppDispatch } from '@src/store';
import * as C_S from '../common-styles';
import * as S from './styles';

// TODO: criar navegação
// TODO: entrypoint

// TODO: navegar para identifiers

export const UserType: FC = () => {
  const dispatch = useAppDispatch();

  const handleNavigate = (type: 'consumer' | 'producer') => {
    dispatch(changeSignUpUserType({ type }));
  };

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

          <S.ButtonType onPress={() => handleNavigate('consumer')}>
            <S.Label>Comprador</S.Label>
          </S.ButtonType>

          <S.ButtonType onPress={() => handleNavigate('producer')}>
            <S.Label>Produtor</S.Label>
          </S.ButtonType>
        </S.UserTypeContainer>
      </C_S.Container>
    </C_S.Container>
  );
};
