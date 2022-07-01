import React, { FC, useEffect, useReducer } from 'react';

import * as C from '@src/components';

import { showBottomTab, useAppDispatch } from '@src/store';
import { useApi, useAppNavigation } from '@src/hooks';

import { initialState, reducer } from './reducer';

import * as C_S from '../../common-styles';

export const TransactionsConcluded: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const appDispatch = useAppDispatch();

  const { onFocus } = useAppNavigation();
  const { getConsumerTransactionConcluded } = useApi();

  const handleOpenRequisition = () => {
    getConsumerTransactionConcluded()
      .then((payload) => dispatch({ type: 'onChangeTransactions', payload }))
      .finally(() => dispatch({ type: 'changeLoading', payload: false }));
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
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C.Map
            data={state.transactions}
            render={(data, index) => (
              <C.ListConsumerTransaction transaction={data} key={index.toString()} />
            )}
          />
        </C_S.Content>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
