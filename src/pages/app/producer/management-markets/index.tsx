import React, { FC, useReducer, useEffect } from 'react';
import { FlatList, RefreshControl, Animated } from 'react-native';
import * as C from '@src/components';
import { Market as MarketState } from '@src/store/slices/market/types';
import { clearSignUpMarket, hideBottomTab, useAppDispatch, useAppSelector } from '@src/store';
import { addSignUpMarket, removeSignUpMarket } from '@src/store';
import { useAppNavigation, useToast as _useToast, useApi } from '@src/hooks';
import * as C_S from '../../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

export const ManagementMarkets: FC = () => {
  const appDispatch = useAppDispatch();
  const { onFocus, goBack } = useAppNavigation();
  const { signUpMarket } = useAppSelector((state) => state);

  const { getMarketsWithoutProducerMarket, postProducerMarkets } = useApi();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenButton = () => dispatch({ type: 'onOpenButton' });
  const onCloseButton = () => dispatch({ type: 'onCloseButton' });
  const onOpenRequest = () => dispatch({ type: 'changeLoading', payload: true });
  const onCloseRequest = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeMarkets = (markets: MarketState[]) =>
    dispatch({ type: 'onChangeMarkets', payload: markets });

  const handleSelect = (market: MarketState) => {
    appDispatch(addSignUpMarket(market));
  };

  const handleRemove = (market: MarketState) => {
    appDispatch(removeSignUpMarket(market));
  };

  const handleGetAllData = () => {
    onOpenRequest();

    getMarketsWithoutProducerMarket()
      .then((markets) => onChangeMarkets(markets))
      .finally(() => onCloseRequest());
  };

  const handleOnMount = async () => {
    appDispatch(hideBottomTab());
    handleGetAllData();
  };

  const handleConfirm = () => {
    onOpenRequest();

    postProducerMarkets(signUpMarket)
      .then(({ error }) => {
        if (!error) return appDispatch(clearSignUpMarket());
      })
      .finally(() => handleGetAllData());
  };

  const handleCancel = () => {
    appDispatch(clearSignUpMarket());

    return goBack();
  };

  useEffect(() => {
    if (!signUpMarket.length) {
      onCloseButton();
      return;
    }

    onOpenButton();
  }, [signUpMarket]);

  useEffect(() => {
    const focus = onFocus(handleOnMount);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Seleção de feiras" iconType="navigate-go-back" />
      <C_S.Container>
        <FlatList
          style={{ paddingVertical: 8, paddingHorizontal: 16 }}
          refreshControl={
            <RefreshControl onRefresh={handleGetAllData} refreshing={state.loading} />
          }
          data={state.markets}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <C.ListSignUpMarket
              market={item}
              actions={{
                remove: handleRemove,
                select: handleSelect,
              }}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
        <Animated.View
          style={{
            height: state.sizeButton.y,
            opacity: state.opacityButton.x,
          }}
        >
          <S.Buttons>
            <S.ButtonConfirm disabled={state.loading} onPress={handleConfirm}>
              <S.ButtonLabel>Confirmar</S.ButtonLabel>
            </S.ButtonConfirm>

            <S.ButtonCancel disabled={state.loading} onPress={handleCancel}>
              <S.ButtonLabel>Cancelar</S.ButtonLabel>
            </S.ButtonCancel>
          </S.Buttons>
        </Animated.View>
      </C_S.Container>
    </C_S.Container>
  );
};
