import React, { FC, useEffect, useCallback, useReducer, useMemo } from 'react';
import { Animated } from 'react-native';

import {
  concludedCart,
  confirmOrCancelCartProducts,
  useAppDispatch,
  useAppSelector,
} from '@src/store';
import { useApi, useAppNavigation, useToast as _useToast } from '@src/hooks';

import * as C from '@src/components';
import { colors } from '@src/config/theme';
import * as C_S from '../../../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

// TODO: navegar para pagina de websocket

export const Payment: FC = () => {
  const { ui, cart } = useAppSelector((state) => state);
  const { navigateTo } = useAppNavigation();
  const useToast = _useToast();
  const appDispatch = useAppDispatch();
  const { postTransaction } = useApi();

  const [state, dispatch] = useReducer(reducer, initialState);

  const hasPayment = useMemo(() => !!cart?.current?.payment, [cart]);

  const showMoreLabel = useMemo(() => {
    if (!hasPayment) return 'selecionar';

    return 'trocar';
  }, [hasPayment]);

  const hasCartPayment = useMemo(() => !!cart.current?.payment, [cart]);

  const dispatchConfirm = () => appDispatch(confirmOrCancelCartProducts(true));
  const dispatchOpenButton = () => dispatch({ type: 'openButton' });
  const dispatchCloseButton = () => dispatch({ type: 'closeButton' });

  const handleOpenOrCloseButton = useCallback(() => {
    if (ui.cartToTab.confirmedProducts && ui.cartToTab.confirmedAddress)
      return dispatchOpenButton();

    return dispatchCloseButton();
  }, [ui.cartToTab.confirmedProducts, ui.cartToTab.confirmedAddress]);

  const handleFinish = async () => {
    if (!hasCartPayment) return useToast.error('Selecione uma forma de pagamento!');

    const { error } = await postTransaction(cart.current);

    if (error) return null;

    dispatchConfirm();
    appDispatch(concludedCart());

    return navigateTo<'consumer'>('transactions', null, { popNavigationToTop: true });
  };

  useEffect(() => {
    handleOpenOrCloseButton();
  }, [handleOpenOrCloseButton]);

  return (
    <C_S.Container>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Resumo</C_S.Title>
          </C_S.TitleContainer>

          <S.Section>
            <S.ValuesSection>
              <S.Label>Subtotal</S.Label>
              <S.Data>{cart.current.total}</S.Data>
            </S.ValuesSection>

            <S.ValuesSection>
              <S.LabelMoney>Total</S.LabelMoney>
              <S.Money>{cart.current.total}</S.Money>
            </S.ValuesSection>
          </S.Section>
        </C_S.Content>

        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Forma de pagamento</C_S.Title>
            <C_S.ShowMore onPress={() => navigateTo<'consumer'>('consumer-payment-methods')}>
              {showMoreLabel}
            </C_S.ShowMore>
          </C_S.TitleContainer>

          <C.If
            condition={hasPayment}
            render={() => (
              <S.Section>
                <S.PaymentName>{cart.current.payment.name}</S.PaymentName>
              </S.Section>
            )}
          />
        </C_S.Content>
      </C_S.ScrollContainer>

      <Animated.View
        style={{
          width: '100%',
          height: state.sizeButton.y,
          opacity: state.opacityButton.x,
        }}
      >
        <C_S.ButtonConfirm onPress={handleFinish} disabled={state.loading}>
          <C.IfElse
            condition={state.loading}
            render={{
              toBeTruthy: () => <C.Loading color={colors.basic.white} sizeType="large" />,
              toBeFalsy: () => <C_S.ButtonLabel>Finalizar</C_S.ButtonLabel>,
            }}
          />
        </C_S.ButtonConfirm>
      </Animated.View>
    </C_S.Container>
  );
};
