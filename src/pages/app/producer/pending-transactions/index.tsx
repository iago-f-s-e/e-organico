import React, { FC, useEffect, useReducer } from 'react';

import * as C from '@src/components';

import { MinimalProducerTransaction } from '@src/store/slices/transaction/types';
import { useApi, useAppNavigation } from '@src/hooks';
import { showBottomTab, useAppDispatch } from '@src/store';

import * as C_S from '../../common-styles';

import { initialState, reducer } from './reducer';

// TODO: renderizar empty component
export const PendingTransactions: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const appDispatch = useAppDispatch();
  const { onFocus } = useAppNavigation();
  const { getProducerTransactionPending, confirmTransaction } = useApi();

  const onOpenConfirm = () => dispatch({ type: 'changeConfirm', payload: false });
  const onCloseConfirm = () => dispatch({ type: 'changeConfirm', payload: false });
  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeInProgress = (payload: MinimalProducerTransaction[]) =>
    dispatch({ type: 'onChangeTransactions', payload });

  const handleOpenRequisition = () => {
    getProducerTransactionPending()
      .then((inProgress) => onChangeInProgress(inProgress))
      .finally(() => onCloseRequisition());
  };

  const handleOnFocus = () => {
    appDispatch(showBottomTab());
    handleOpenRequisition();
  };

  const handleConfirm = (id: string) => {
    onOpenConfirm();

    confirmTransaction(id)
      .then(() => handleOpenRequisition())
      .finally(() => onCloseConfirm());
  };

  useEffect(() => {
    const focus = onFocus(handleOnFocus);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Buscar</C_S.Title>
        </C_S.TitleContainer>
        <C.Map
          data={state.transactions}
          render={(value, index) => (
            <C.ListProducerTransaction
              showWaitingTime
              confirm={handleConfirm}
              confirming={state.confirming}
              transaction={value}
              key={index.toString()}
            />
          )}
        />
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
