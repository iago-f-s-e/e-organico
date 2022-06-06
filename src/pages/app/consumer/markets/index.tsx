import React, { FC, useReducer, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Market } from '@src/store/slices/market/types';
import { useApi } from '@src/hooks/use-api';
import * as C from '@src/components';
import { useAppNavigation } from '@src/hooks';
import * as C_S from '../../common-styles';

import { initialState, reducer } from './reducer';

export const Markets: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { onFocus } = useAppNavigation();
  const { getAllMarkets } = useApi();

  const onOpenRequisition = () => dispatch({ type: 'changeLoading', payload: true });
  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeMarkets = (markets: Market[]) =>
    dispatch({ type: 'onChangeMarkets', payload: markets });

  const handleOpenRequisition = () => {
    onOpenRequisition();

    getAllMarkets()
      .then((markets) => onChangeMarkets(markets))
      .finally(() => onCloseRequisition());
  };

  useEffect(() => {
    const focus = onFocus(handleOpenRequisition);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Ultimas feiras</C_S.Title>
          <C_S.ShowMore>ver mais</C_S.ShowMore>
        </C_S.TitleContainer>
        <FlatList
          data={state.markets}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <C.ListConsumerMarket market={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Feiras mais populares</C_S.Title>
        </C_S.TitleContainer>

        <FlatList
          data={state.markets}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <C.ListConsumerMarket market={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Todas as feiras</C_S.Title>
          <C_S.ShowMore>ver mais</C_S.ShowMore>
        </C_S.TitleContainer>

        <C.Map
          data={state.markets}
          render={(value, index) => <C.ListConsumerMarket key={index.toString()} market={value} />}
        />
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
