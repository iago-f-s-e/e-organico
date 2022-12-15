import React, { FC, useEffect, useReducer } from 'react';

import * as C from '@src/components';

import { MinimalProducerTransaction } from '@src/store/slices/transaction/types';
import { useApi, useAppNavigation } from '@src/hooks';
import { showBottomTab, useAppDispatch } from '@src/store';

import * as C_S from '../../common-styles';

import { initialState, reducer } from './reducer';

export const TransactionsSeparation: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const appDispatch = useAppDispatch();
  const { onFocus } = useAppNavigation();
  const { getProducerTransactionInSeparation, separateTransaction } = useApi();

  const onOpenAccept = () => dispatch({ type: 'changeAccept', payload: false });
  const onCloseAccept = () => dispatch({ type: 'changeAccept', payload: false });
  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeInProgress = (payload: MinimalProducerTransaction[]) =>
    dispatch({ type: 'onChangeTransactions', payload });

  const handleOpenRequisition = () => {
    getProducerTransactionInSeparation()
      .then((inSeparation) => onChangeInProgress(inSeparation))
      .finally(() => onCloseRequisition());
  };

  const handleOnFocus = () => {
    appDispatch(showBottomTab());
    handleOpenRequisition();
  };

  const handleAccept = (id: string) => {
    onOpenAccept();

    separateTransaction(id)
      .then(() => handleOpenRequisition())
      .finally(() => onCloseAccept());
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
              onRequest={handleAccept}
              inRequisition={state.accepting}
              transaction={value}
              key={index.toString()}
            />
          )}
        />
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
