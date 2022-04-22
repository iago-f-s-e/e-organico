import React, { FC, useEffect, useCallback, useReducer } from 'react';
import { Animated } from 'react-native';

import { confirmOrCancelCartAddress, useAppDispatch, useAppSelector } from '@src/store';

import { useAppNavigation } from '@src/hooks';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

import { initialState, reducer } from './reducer';

export const Address: FC = () => {
  const { ui } = useAppSelector((state) => state);
  const appDispatch = useAppDispatch();

  const { navigateTo } = useAppNavigation();

  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchConfirm = () => appDispatch(confirmOrCancelCartAddress(true));
  const dispatchCancel = () => appDispatch(confirmOrCancelCartAddress(false));
  const dispatchOpenButton = () => dispatch({ type: 'openButton' });
  const dispatchCloseButton = () => dispatch({ type: 'closeButton' });

  const handleOpenOrCloseButton = useCallback(() => {
    if (ui.cartToTab.confirmedProducts) return dispatchOpenButton();

    return dispatchCloseButton();
  }, [ui.cartToTab.confirmedProducts]);

  const handleConfirm = () => {
    dispatchConfirm();

    return navigateTo<'consumer'>('consumer-cart-payment');
  };

  const handleCancel = () => {
    return dispatchCancel();
  };

  useEffect(() => {
    handleOpenOrCloseButton();
  }, [handleOpenOrCloseButton]);

  return (
    <C_S.Container>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.TitleContainer>
          <C_S.Title>Feira selecionada</C_S.Title>
        </C_S.TitleContainer>

        <C_S.TitleContainer>
          <C_S.Title>Renderizar feira selecionada ou feira atual</C_S.Title>
        </C_S.TitleContainer>

        <C_S.TitleContainer>
          <C_S.Title>Feiras do feirante</C_S.Title>
        </C_S.TitleContainer>
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
