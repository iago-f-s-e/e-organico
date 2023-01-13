import React, { FC, useEffect, useReducer } from 'react';

import { hideBottomTab, useAppDispatch } from '@src/store';
import { useAppNavigation, useApi } from '@src/hooks';

import { MarketDetail } from '@src/store/slices/market/types';
import { colorSystem } from '@src/styles';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

// TODO: adicionar filtro de feirantes
// TODO: adicionar produtos mais vendidos

import { initialState, reducer } from './reducer';

export const Market: FC = () => {
  const appDispatch = useAppDispatch();
  const { onFocus, getIdParams } = useAppNavigation();
  const [state, dispatch] = useReducer(reducer, { ...initialState, idParam: getIdParams() });

  const { getMarketById } = useApi();

  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeMarket = (market: MarketDetail) =>
    dispatch({ type: 'onChangeMarket', payload: market });

  const handleOpenRequisition = () => {
    getMarketById(state.idParam)
      .then((market) => onChangeMarket(market))
      .finally(() => onCloseRequisition());
  };

  const handleOnFocus = () => {
    appDispatch(hideBottomTab());
    handleOpenRequisition();
  };

  useEffect(() => {
    const focus = onFocus(handleOnFocus);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Feira" />
      <C.IfElse
        condition={state.loading}
        render={{
          toBeTruthy: () => <C.Loading color={colorSystem.main.primary} sizeType="large" />,
          toBeFalsy: () => (
            <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
              <C_S.Content>
                <C_S.TitleContainer>
                  <C_S.Title>Feira selecionada</C_S.Title>
                </C_S.TitleContainer>
                <C.MarketDetailCard market={state.market} />
              </C_S.Content>

              <C_S.Content>
                <C_S.TitleContainer>
                  <C_S.Title>Feirantes</C_S.Title>
                  <C_S.ShowMore>ver mais</C_S.ShowMore>
                </C_S.TitleContainer>

                <C.Map
                  data={state.market.producers}
                  render={(value, index) => (
                    <C.ListConsumerProducer key={index.toString()} producer={value} />
                  )}
                />
              </C_S.Content>
            </C_S.ScrollContainer>
          ),
        }}
      />
    </C_S.Container>
  );
};
