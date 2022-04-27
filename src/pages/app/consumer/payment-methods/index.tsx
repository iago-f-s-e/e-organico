import React, { FC, useReducer, useMemo, useCallback, useEffect } from 'react';

import { PaymentMethod } from '@src/store/slices/payment-method/types';
import { setCartPayment, useAppDispatch, useAppSelector } from '@src/store';
import { useAppNavigation, useToast as _useToast } from '@src/hooks';
import * as C from '@src/components';
import * as C_S from '../common-styles';

import { initialState, reducer } from './reducer';
import { validateState } from './validate-state';

const payments: PaymentMethod[] = [
  {
    id: 'id',
    name: 'Dinheiro',
    type: 'in-person',
  },
  {
    id: 'id2',
    name: 'Pix',
    type: 'in-person',
  },
  {
    id: 'id3',
    name: 'Cartão crédito',
    type: 'in-person',
  },
  {
    id: 'id4',
    name: 'Cartão débito',
    type: 'in-person',
  },
];

export const PaymentMethods: FC = () => {
  const appDispatch = useAppDispatch();
  const useToast = _useToast();
  const { cart } = useAppSelector((state) => state);
  const { goBack } = useAppNavigation();

  const [state, dispatch] = useReducer(reducer, initialState);

  const label = useMemo(() => {
    const hasCartPayment = !!cart.current?.payment;

    if (!hasCartPayment) return 'Selecionar';

    const match = state.paymentMethod?.id === cart.current?.payment.id;

    if (match) return 'Voltar';

    return 'Trocar';
  }, [cart, state]);

  const dispatchChangePaymentMethod = (payload: PaymentMethod) =>
    dispatch({ type: 'onPaymentMethod', payload });

  const handleConfirm = useCallback(() => {
    if (label === 'Voltar') return goBack();

    const response = validateState(state);

    if (response.type === 'error') return useToast.error(response.message);

    appDispatch(setCartPayment(response.paymentMethod));

    return goBack();
  }, [label, goBack, useToast, state, appDispatch]);

  useEffect(() => {
    const hasCartPayment = !!cart.current?.payment;

    if (hasCartPayment) {
      dispatch({ type: 'onPaymentMethod', payload: cart.current?.payment });
    }
  }, [cart]);

  return (
    <C_S.Container>
      <C.Header title="Formas de pagamento" />
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Pague pessoalmente com:</C_S.Title>
          </C_S.TitleContainer>

          <C.Map
            data={payments}
            render={(value, index) => (
              <C.ListConsumerPaymentMethod
                key={index.toString()}
                paymentMethod={value}
                current={state.paymentMethod}
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
