import React, { FC, useReducer } from 'react';

import * as C from '@src/components';
import * as C_S from '../../common-styles';

import { initialState, reducer } from './reducer';

// TODO: renderizar empty component
export const PendingTransactions: FC = () => {
  const [state] = useReducer(reducer, initialState);

  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Buscar</C_S.Title>
        </C_S.TitleContainer>
        <C.Map
          data={state.transactions}
          render={(value, index) => (
            <C.ListProducerTransaction showWaitingTime transaction={value} key={index.toString()} />
          )}
        />
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
