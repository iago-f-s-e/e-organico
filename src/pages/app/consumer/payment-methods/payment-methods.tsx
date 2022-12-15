import React, { FC, useReducer, useMemo, useCallback, useEffect } from 'react';

import { Payment } from '@src/store/slices/payment-method/types';
import { setCartPayment, useAppDispatch, useAppSelector } from '@src/store';
import { useApi, useAppNavigation, useToast as _useToast } from '@src/hooks';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

import { initialState, reducer } from './reducer';
import { validateState } from './validate-state';

export const PaymentMethods: FC = () => {
  const appDispatch = useAppDispatch();
  const useToast = _useToast();
  const { cart } = useAppSelector((state) => state);
  const { goBack, onFocus } = useAppNavigation();
  const { getAllPayments } = useApi();

  const [state, dispatch] = useReducer(reducer, initialState);

  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangePayments = (payload: Payment[]) => dispatch({ type: 'onChangePayments', payload });

  const label = useMemo(() => {
    const hasCartPayment = !!cart.current?.payment;

    if (!hasCartPayment) return 'Selecionar';

    const match = state.payment?.id === cart.current?.payment.id;

    if (match) return 'Voltar';

    return 'Trocar';
  }, [cart, state]);

  const dispatchChangePaymentMethod = (payload: Payment) =>
    dispatch({ type: 'onPaymentMethod', payload });

  const handleOpenRequisition = () => {
    getAllPayments()
      .then((payments) => onChangePayments(payments))
      .finally(() => onCloseRequisition());
  };

  const handleConfirm = useCallback(() => {
    if (label === 'Voltar') return goBack();

    const response = validateState(state);

    if (response.type === 'error') return useToast.error(response.message);

    appDispatch(setCartPayment(response.payment));

    return goBack();
  }, [label, goBack, useToast, state, appDispatch]);

  useEffect(() => {
    const hasCartPayment = !!cart.current?.payment;

    if (hasCartPayment) {
      dispatch({ type: 'onPaymentMethod', payload: cart.current?.payment });
    }
  }, [cart]);

  useEffect(() => {
    const focus = onFocus(handleOpenRequisition);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Formas de pagamento" />
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Pague pessoalmente com:</C_S.Title>
          </C_S.TitleContainer>

          <C.Map
            data={state.payments}
            render={(value, index) => (
              <C.ListConsumerPaymentMethod
                key={index.toString()}
                payment={value}
                current={state.payment}
                onSelect={(value) => dispatchChangePaymentMethod(value)}
                selected={cart.current?.payment}
              />
            )}
          />
        </C_S.Content>
      </C_S.ScrollContainer>

      <C_S.ButtonConfirm onPress={handleConfirm}>
        <C_S.ButtonLabel>{label}</C_S.ButtonLabel>
      </C_S.ButtonConfirm>
    </C_S.Container>
  );
};
