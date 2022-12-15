import React, { FC, useEffect, useReducer } from 'react';

import * as C from '@src/components';

import { showBottomTab, useAppDispatch } from '@src/store';
import { useAppNavigation } from '@src/hooks';
import { initialState, reducer } from './reducer';

import * as C_S from '../../common-styles';

// TODO: CRIAR NAVEGAÇÃO PARA CARRINHO
// TODO: IMPLEMENTAR UM RETRY PARA ATUALIZAR O STATUS

export const Transactions: FC = () => {
  const [state] = useReducer(reducer, initialState);

  const appDispatch = useAppDispatch();

  const { onFocus } = useAppNavigation();

  const handleOnFocus = () => {
    appDispatch(showBottomTab());
  };

  useEffect(() => {
    const focus = onFocus(handleOnFocus);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Pedidos" />

      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C.If
          condition={!!state.concluded.length}
          render={() => (
            <C_S.Content>
              <C_S.TitleContainer>
                <C_S.Title>Pedidos concluídos</C_S.Title>
              </C_S.TitleContainer>
            </C_S.Content>
          )}
        />
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
