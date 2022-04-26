import React, { FC, useEffect, useCallback, useReducer, useMemo } from 'react';
import { Animated } from 'react-native';

import { confirmOrCancelCartAddress, useAppDispatch, useAppSelector } from '@src/store';

import { useAppNavigation, useToast as _useToast } from '@src/hooks';
import * as C from '@src/components';
import { Market, WorkDay } from '@src/store/slices/market/types';
import * as C_S from '../../common-styles';

import { initialState, reducer } from './reducer';
import { validateMarketState } from './validate-state';

const imagePath =
  'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

const markets: Market[] = [
  {
    id: 'id',
    name: 'feira do joão',
    imagePath,
    address: {
      city: 'cidade',
      complement: 'complement',
      district: 'district',
      number: '55',
      state: 'state',
      street: 'street',
      zipCode: '49000-000',
    },
    wordDays: [
      {
        day: 'MONDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'TUESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'WEDNESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'THURSDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'FRIDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SATURDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SUNDAY',
        close: '22:00',
        open: '07:30',
      },
    ],
  },
  {
    id: 'id2',
    name: 'feira do pedro',
    imagePath,
    address: {
      city: 'cidade',
      complement: 'complement',
      district: 'district',
      number: '55',
      state: 'state',
      street: 'street',
      zipCode: '49000-000',
    },
    wordDays: [
      {
        day: 'MONDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'TUESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'WEDNESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'THURSDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'FRIDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SATURDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SUNDAY',
        close: '22:00',
        open: '07:30',
      },
    ],
  },
  {
    id: 'id3',
    name: 'feira do zé',
    imagePath,
    address: {
      city: 'cidade',
      complement: 'complement',
      district: 'district',
      number: '55',
      state: 'state',
      street: 'street',
      zipCode: '49000-000',
    },
    wordDays: [
      {
        day: 'MONDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'TUESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'WEDNESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'THURSDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'FRIDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SATURDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SUNDAY',
        close: '22:00',
        open: '07:30',
      },
    ],
  },
  {
    id: 'id4',
    name: 'feira do zé',
    imagePath,
    address: {
      city: 'cidade',
      complement: 'complement',
      district: 'district',
      number: '55',
      state: 'state',
      street: 'street',
      zipCode: '49000-000',
    },
    wordDays: [
      {
        day: 'MONDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'TUESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'WEDNESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'THURSDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'FRIDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SATURDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SUNDAY',
        close: '22:00',
        open: '07:30',
      },
    ],
  },
  {
    id: 'id5',
    name: 'feira do zé',
    imagePath,
    address: {
      city: 'cidade',
      complement: 'complement',
      district: 'district',
      number: '55',
      state: 'state',
      street: 'street',
      zipCode: '49000-000',
    },
    wordDays: [
      {
        day: 'MONDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'TUESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'WEDNESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'THURSDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'FRIDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SATURDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SUNDAY',
        close: '22:00',
        open: '07:30',
      },
    ],
  },
];

export const Address: FC = () => {
  const { ui, section, cart } = useAppSelector((state) => state);
  const appDispatch = useAppDispatch();
  const useToast = _useToast();
  const { navigateTo } = useAppNavigation();

  const [state, dispatch] = useReducer(reducer, initialState);

  const renderAddressCart = useMemo(() => cart.current?.addressOrMarket.type === 'pick', [cart]);

  const dispatchCancel = () => appDispatch(confirmOrCancelCartAddress(false));
  const dispatchOpenButton = () => dispatch({ type: 'openButton' });
  const dispatchCloseButton = () => dispatch({ type: 'closeButton' });
  const dispatchChangeDay = (payload: WorkDay) => dispatch({ type: 'onChangeDay', payload });
  const dispatchChangeMarket = (payload: Market) => dispatch({ type: 'onChangeMarket', payload });

  const handleCancel = () => {
    return dispatchCancel();
  };

  const handleOpenOrCloseButton = useCallback(() => {
    if (ui.cartToTab.confirmedProducts) return dispatchOpenButton();

    return dispatchCloseButton();
  }, [ui.cartToTab.confirmedProducts]);

  const handleConfirmAddress = useCallback(() => {
    const response = validateMarketState(state);

    if (response.type === 'error') return useToast.error(response.message);

    appDispatch(confirmOrCancelCartAddress(true));

    return navigateTo<'consumer'>('consumer-cart-payment');
  }, [navigateTo, useToast, state, appDispatch]);
  const handleConfirmMarket = useCallback(() => {
    const response = validateMarketState(state);

    if (response.type === 'error') return useToast.error(response.message);

    appDispatch(confirmOrCancelCartAddress(true));

    return navigateTo<'consumer'>('consumer-cart-payment');
  }, [navigateTo, useToast, state, appDispatch]);

  const handleConfirm = useCallback(() => {
    const pickOrDelivery = cart.current?.addressOrMarket.type;

    if (pickOrDelivery === 'pick') return handleConfirmAddress();

    return handleConfirmMarket();
  }, [cart, handleConfirmMarket, handleConfirmAddress]);

  useEffect(() => {
    handleOpenOrCloseButton();
  }, [handleOpenOrCloseButton]);

  useEffect(() => {
    if (cart.current?.addressOrMarket.type !== 'delivery') return; // TODO: adicionar toggle para type

    const hasMarket = !!cart.current?.addressOrMarket.market;

    if (!hasMarket) {
      dispatchChangeMarket(section.market);
      return;
    }

    dispatchChangeMarket(cart.current?.addressOrMarket.market);
  }, [cart, section.market]);

  return (
    <C_S.Container>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C.If
          condition={renderAddressCart}
          render={() => (
            <C.CartMarket
              markets={markets}
              selected={{ market: state.market, day: state.day }}
              actions={{ selectMarket: dispatchChangeMarket, selectDay: dispatchChangeDay }}
            />
          )}
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
              <C_S.ButtonConfirm onPress={handleConfirm}>
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
