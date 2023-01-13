import React, { FC, useEffect, useCallback, useReducer, useMemo } from 'react';
import { Animated } from 'react-native';

import { confirmOrCancelCartProducts, useAppDispatch, useAppSelector } from '@src/store';
import { useApi, useAppNavigation, useStorage, useToast as _useToast } from '@src/hooks';

import * as C from '@src/components';
import { colorSystem } from '@src/styles';
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
  const { clearCart } = useStorage();

  const [state, dispatch] = useReducer(reducer, initialState);

  const hasPayment = useMemo(() => !!cart?.current?.payment, [cart]);

  const showMoreLabel = useMemo(() => {
    if (!hasPayment) return 'selecionar';

    return 'trocar';
  }, [hasPayment]);

  const hasCartPayment = useMemo(() => !!cart.current?.payment, [cart]);

  const onOpenRequisition = () => dispatch({ type: 'changeLoading', payload: true });
  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
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

    onOpenRequisition();

    postTransaction(cart.current)
      .then((res) => {
        if (res.error) return null;

        dispatchConfirm();
        clearCart();

        return navigateTo<'consumer'>('transactions', null, { popNavigationToTop: true });
      })
      .finally(() => onCloseRequisition());
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
              toBeTruthy: () => <C.Loading color={colorSystem.basic.white} sizeType="large" />,
              toBeFalsy: () => <C_S.ButtonLabel>Finalizar</C_S.ButtonLabel>,
            }}
          />
        </C_S.ButtonConfirm>
      </Animated.View>
    </C_S.Container>
  );
};
