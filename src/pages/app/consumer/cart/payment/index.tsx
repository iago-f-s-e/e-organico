import React, { FC, useEffect, useCallback, useReducer, useMemo } from 'react';
import { Animated } from 'react-native';

import { confirmOrCancelCartProducts, useAppDispatch, useAppSelector } from '@src/store';
import { useAppNavigation } from '@src/hooks';
import * as C_S from '../../common-styles';

import { initialState, reducer } from './reducer';

export const Payment: FC = () => {
  const { ui, cart } = useAppSelector((state) => state);
  const { navigateTo } = useAppNavigation();
  const appDispatch = useAppDispatch();

  const [state, dispatch] = useReducer(reducer, initialState);

  const showMoreLabel = useMemo(() => {
    if (!cart?.current?.payment) return 'selecionar';

    return 'trocar';
  }, [cart]);

  const dispatchConfirm = () => appDispatch(confirmOrCancelCartProducts(true));
  const dispatchOpenButton = () => dispatch({ type: 'openButton' });
  const dispatchCloseButton = () => dispatch({ type: 'closeButton' });

  const handleOpenOrCloseButton = useCallback(() => {
    if (ui.cartToTab.confirmedProducts && ui.cartToTab.confirmedAddress)
      return dispatchOpenButton();

    return dispatchCloseButton();
  }, [ui.cartToTab.confirmedProducts, ui.cartToTab.confirmedAddress]);

  const handleFinish = () => {
    return dispatchConfirm();
  };

  useEffect(() => {
    handleOpenOrCloseButton();
  }, [handleOpenOrCloseButton]);

  return (
    <C_S.Container>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.TitleContainer>
          <C_S.Title>Resumo</C_S.Title>
        </C_S.TitleContainer>

        <C_S.TitleContainer>
          <C_S.Title>Forma de pagamento</C_S.Title>
          <C_S.ShowMore onPress={() => navigateTo<'consumer'>('consumer-payment-methods')}>
            {showMoreLabel}
          </C_S.ShowMore>
        </C_S.TitleContainer>
      </C_S.ScrollContainer>

      <Animated.View
        style={{
          width: '100%',
          height: state.sizeButton.y,
          opacity: state.opacityButton.x,
        }}
      >
        <C_S.ButtonConfirm onPress={handleFinish}>
          <C_S.ButtonLabel>Finalizar</C_S.ButtonLabel>
        </C_S.ButtonConfirm>
      </Animated.View>
    </C_S.Container>
  );
};
