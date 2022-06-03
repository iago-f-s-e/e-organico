import React, { FC, useReducer } from 'react';
import { FlatList } from 'react-native';

// TODO: navegar para produtos iniciais

import * as C from '@src/components';
import { Market as MarketState } from '@src/store/slices/market/types';
import { useAppDispatch, useAppSelector } from '@src/store';
import { addSignUpMarket, removeSignUpMarket } from '@src/store';
import { useAppNavigation, useToast as _useToast } from '@src/hooks';
import * as C_S from '../common-styles';

import { initialState, reducer } from './reducer';

// TODO: remover dados mocados
// TODO: buscar markets da api
export const Market: FC = () => {
  const appDispatch = useAppDispatch();
  const { navigateTo, goBack } = useAppNavigation();
  const { signUpMarket } = useAppSelector((state) => state);

  const useToast = _useToast();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenAnimation = () => dispatch({ type: 'onOpenAnimation' });
  const onCloseAnimation = () => dispatch({ type: 'onCloseAnimation' });

  const handleSelect = (market: MarketState) => {
    appDispatch(addSignUpMarket(market));
  };

  const handleRemove = (market: MarketState) => {
    appDispatch(removeSignUpMarket(market));
  };

  const handleNext = () => {
    if (!signUpMarket.length) return useToast.error('Selecione pelo menos uma feira!');

    return navigateTo<'auth'>('sign-up-initial-product'); // TODO: navegar para produtos iniciais
  };

  return (
    <C_S.Container>
      <C.Header handle={goBack} title="Seleção de feiras" iconType="navigate-go-back" />
      <C_S.Container>
        <FlatList
          style={{ paddingVertical: 8, paddingHorizontal: 16 }}
          data={[]}
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

        <C.NextButton
          handle={handleNext}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
