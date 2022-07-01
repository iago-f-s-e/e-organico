import React, { FC, useReducer, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import * as C from '@src/components';
import { Market as MarketState } from '@src/store/slices/market/types';
import { changeSignUpProducer, useAppDispatch, useAppSelector } from '@src/store';
import { addSignUpMarket, removeSignUpMarket } from '@src/store';
import { useAppNavigation, useToast as _useToast, useApi } from '@src/hooks';
import * as C_S from '../common-styles';

import { initialState, reducer } from './reducer';

export const Market: FC = () => {
  const appDispatch = useAppDispatch();
  const { navigateTo, onFocus } = useAppNavigation();
  const { signUpMarket, signUpProducer } = useAppSelector((state) => state);

  const { getAllMarkets } = useApi();
  const useToast = _useToast();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenAnimation = () => dispatch({ type: 'onOpenAnimation' });
  const onCloseAnimation = () => dispatch({ type: 'onCloseAnimation' });
  const onGetAllMarkets = () => dispatch({ type: 'changeLoading', payload: true });
  const onConcludedGetAllMarkets = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeMarkets = (markets: MarketState[]) =>
    dispatch({ type: 'onChangeMarkets', payload: markets });

  const handleSelect = (market: MarketState) => {
    appDispatch(addSignUpMarket(market));
  };

  const handleRemove = (market: MarketState) => {
    appDispatch(removeSignUpMarket(market));
  };

  const handleNext = () => {
    if (!signUpMarket.length) return useToast.error('Selecione pelo menos uma feira!');

    appDispatch(
      changeSignUpProducer({
        ...signUpProducer,
        markets: signUpMarket,
      }),
    );

    return navigateTo<'auth'>('sign-up-initial-product');
  };

  const handleGetAllMarkets = () => {
    onGetAllMarkets();

    getAllMarkets()
      .then((markets) => onChangeMarkets(markets))
      .finally(() => onConcludedGetAllMarkets());
  };

  useEffect(() => {
    const focus = onFocus(handleGetAllMarkets);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Seleção de feiras" iconType="navigate-go-back" />
      <C_S.Container>
        <FlatList
          style={{ paddingVertical: 8, paddingHorizontal: 16 }}
          refreshControl={
            <RefreshControl onRefresh={handleGetAllMarkets} refreshing={state.loading} />
          }
          data={state.markets}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <C.ListSignUpMarket
              market={item}
              actions={{
                remove: handleRemove,
                select: handleSelect,
                onCloseAnimation,
                onOpenAnimation,
              }}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />

        <C.AnimatedButton
          handle={handleNext}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
