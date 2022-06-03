import React, { FC, useEffect, useCallback, useReducer, useMemo } from 'react';
import { Animated } from 'react-native';

import {
  confirmOrCancelCartAddress,
  cancelCartAddress,
  setCartAddress,
  useAppDispatch,
  useAppSelector,
} from '@src/store';

import { useAppNavigation, useToast as _useToast } from '@src/hooks';
import { Market, Workday } from '@src/store/slices/market/types';
import * as C from '@src/components';
import * as C_S from '../../../common-styles';

import { initialState, reducer } from './reducer';
import { validateMarketState } from './validate-state';

const markets: Market[] = [];

export const Address: FC = () => {
  const { ui, section, cart } = useAppSelector((state) => state);
  const { navigateTo } = useAppNavigation();
  const appDispatch = useAppDispatch();
  const useToast = _useToast();

  const [state, dispatch] = useReducer(reducer, initialState);

  const pickOrder = useMemo(() => cart.current?.pickOrDelivery.type === 'pick', [cart]);

  const cartMarket = useMemo(() => {
    if (cart.current?.pickOrDelivery?.type !== 'pick') return null;

    return cart.current?.pickOrDelivery?.market;
  }, [cart]);

  const dispatchCancel = () => appDispatch(confirmOrCancelCartAddress(false));
  const dispatchOpenButton = () => dispatch({ type: 'openButton' });
  const dispatchCloseButton = () => dispatch({ type: 'closeButton' });
  const dispatchChangeDay = (payload: Workday) => dispatch({ type: 'onChangeDay', payload });
  const dispatchChangeMarket = (payload: Market) => dispatch({ type: 'onChangeMarket', payload });
  const dispatchToChangeMarket = (payload: boolean) =>
    dispatch({ type: 'onToChangeMarket', payload });

  const handleOpenOrCloseButton = useCallback(() => {
    if (ui.cartToTab.confirmedProducts) return dispatchOpenButton();

    return dispatchCloseButton();
  }, [ui.cartToTab.confirmedProducts]);

  const handleConfirmAddress = useCallback((): { canNavigate: boolean } => {
    const response = validateMarketState(state);

    if (response.type === 'error') {
      useToast.error(response.message);

      return { canNavigate: false };
    }

    if (response.type !== 'address') return { canNavigate: false };

    appDispatch(confirmOrCancelCartAddress(true));
  }, [useToast, state, appDispatch]);

  const handleConfirmMarket = useCallback((): { canNavigate: boolean } => {
    const response = validateMarketState(state);

    if (response.type === 'error') {
      useToast.error(response.message);

      return { canNavigate: false };
    }

    if (response.type !== 'market') return { canNavigate: false };

    const { market, weekday } = response;

    appDispatch(setCartAddress({ type: 'pick', market, selectedDay: weekday }));
    appDispatch(confirmOrCancelCartAddress(true));

    return { canNavigate: true };
  }, [useToast, state, appDispatch]);

  const handleConfirm = useCallback(() => {
    const pickOrDelivery = cart.current?.pickOrDelivery.type;

    if (pickOrDelivery === 'pick') return handleConfirmMarket();

    return handleConfirmAddress();
  }, [cart, handleConfirmMarket, handleConfirmAddress]);

  const handleCancel = () => {
    appDispatch(cancelCartAddress());

    return dispatchCancel();
  };

  const handleSelectMarket = (payload: Market) => {
    let weekday = null;

    if (cart.current?.pickOrDelivery?.type === 'pick') {
      const hasCurrentMarket = !!cart.current?.pickOrDelivery?.market;
      const matchIds = payload.id === cart.current?.pickOrDelivery?.market?.id;

      const changeMarket = hasCurrentMarket && !matchIds;

      dispatchToChangeMarket(changeMarket);

      weekday = changeMarket ? null : cart.current?.pickOrDelivery?.selectedDay;
    }

    dispatchChangeDay(weekday);
    dispatchChangeMarket(payload);
  };

  const handleNavigate = () => navigateTo<'consumer'>('consumer-cart-payment');

  const handleConfirmChange = () => {
    handleConfirmMarket();
  };

  const handleCancelChange = () => {
    if (cart.current?.pickOrDelivery?.type !== 'pick') return;

    dispatchToChangeMarket(false);
    dispatchChangeDay(cart.current?.pickOrDelivery?.selectedDay);
    dispatchChangeMarket(cart.current?.pickOrDelivery?.market);
  };

  const handleConfirmAndNavigate = () => {
    const { canNavigate } = handleConfirm();

    if (!canNavigate) return;

    return handleNavigate();
  };

  useEffect(() => {
    handleOpenOrCloseButton();
  }, [handleOpenOrCloseButton]);

  useEffect(() => {
    if (cart.current?.pickOrDelivery.type !== 'pick') return; // TODO: adicionar toggle para type

    const hasMarket = !!cart.current?.pickOrDelivery?.market;

    if (!hasMarket) {
      dispatchChangeDay(null);
      dispatchChangeMarket(section.market);
      return;
    }

    dispatchChangeDay(cart.current?.pickOrDelivery?.selectedDay);
    dispatchChangeMarket(cart.current?.pickOrDelivery?.market);
  }, [cart, section.market]);

  return (
    <C_S.Container>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C.IfElse
          condition={pickOrder}
          render={{
            toBeFalsy: () => (
              <C.CartMarket
                markets={markets}
                change={state.toChangeMarket}
                selected={{ market: state.market, weekday: state.weekday, cartMarket }}
                actions={{
                  selectMarket: handleSelectMarket,
                  selectDay: dispatchChangeDay,
                  cancelChangeMarket: handleCancelChange,
                  confirmChangeMarket: handleConfirmChange,
                }}
              />
            ),
            toBeTruthy: () => (
              <C.CartMarket
                markets={markets}
                change={state.toChangeMarket}
                selected={{ market: state.market, weekday: state.weekday, cartMarket }}
                actions={{
                  selectMarket: handleSelectMarket,
                  selectDay: dispatchChangeDay,
                  cancelChangeMarket: handleCancelChange,
                  confirmChangeMarket: handleConfirmChange,
                }}
              />
            ),
          }}
        />
      </C_S.ScrollContainer>

      <Animated.View
        style={{
          width: '100%',
          height: state.sizeButton.y,
          opacity: state.opacityButton.x,
        }}
      >
        <C.IfElse
          condition={!ui.cartToTab.confirmedAddress}
          render={{
            toBeTruthy: () => (
              <C_S.ButtonConfirm onPress={handleConfirmAndNavigate}>
                <C_S.ButtonLabel>Confirmar</C_S.ButtonLabel>
              </C_S.ButtonConfirm>
            ),
            toBeFalsy: () => (
              <C_S.ButtonCancel onPress={handleCancel}>
                <C_S.ButtonLabel>Cancelar</C_S.ButtonLabel>
              </C_S.ButtonCancel>
            ),
          }}
        />
      </Animated.View>
    </C_S.Container>
  );
};
