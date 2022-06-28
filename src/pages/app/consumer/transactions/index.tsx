import React, { FC, useEffect, useReducer } from 'react';

import * as C from '@src/components';

import { showBottomTab, useAppDispatch } from '@src/store';
import { useApi, useAppNavigation } from '@src/hooks';
import { MinimalConsumerTransaction } from '@src/store/slices/transaction/types';
import { initialState, reducer } from './reducer';

import * as C_S from '../../common-styles';

// TODO: CRIAR NAVEGAÇÃO PARA CARRINHO
// TODO: IMPLEMENTAR UM RETRY PARA ATUALIZAR O STATUS

export const Transactions: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const appDispatch = useAppDispatch();

  const { onFocus } = useAppNavigation();
  const { getConsumerTransactionInProgress } = useApi();

  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeInProgress = (payload: MinimalConsumerTransaction[]) =>
    dispatch({ type: 'onChangeInProgress', payload });

  const handleOpenRequisition = () => {
    getConsumerTransactionInProgress()
      .then((inProgress) => onChangeInProgress(inProgress))
      .finally(() => onCloseRequisition());
  };

  const handleOnFocus = () => {
    appDispatch(showBottomTab());
    handleOpenRequisition();
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
          condition={!!state.inProgress.length}
          render={() => (
            <C_S.Content>
              <C_S.TitleContainer>
                <C_S.Title>Pedidos em andamento</C_S.Title>
              </C_S.TitleContainer>

              <C.Map
                data={state.inProgress}
                render={(data, index) => (
                  <C.ListConsumerTransaction transaction={data} key={index.toString()} />
                )}
              />
            </C_S.Content>
          )}
        />

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
