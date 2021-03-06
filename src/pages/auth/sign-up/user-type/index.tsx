import React, { FC } from 'react';

import * as C from '@src/components';
import { changeSignUpUserType, useAppDispatch } from '@src/store';
import { useAppNavigation } from '@src/hooks';
import * as C_S from '../common-styles';
import * as S from './styles';

export const UserType: FC = () => {
  const dispatch = useAppDispatch();
  const { navigateTo } = useAppNavigation();

  const handleNavigate = (type: 'consumer' | 'producer') => {
    dispatch(changeSignUpUserType({ type }));

    return navigateTo<'auth'>('sign-up-identifiers');
  };

  return (
    <C_S.Container>
      <C.Header title="Tipo de usuário" iconType="navigate-go-back" />
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
