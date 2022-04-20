import React, { FC, useMemo } from 'react';

import { confirmOrCancelCartProducts, useAppDispatch, useAppSelector } from '@src/store';

import * as C from '@src/components';
import { useAppNavigation } from '@src/hooks';
import * as C_S from '../../common-styles';
import * as S from './styles';

export const Products: FC = () => {
  const { cart, ui } = useAppSelector((state) => state);
  const appDispatch = useAppDispatch();

  const { navigateTo } = useAppNavigation();

  const quantity = useMemo(() => cart.current.products.length, [cart]);

  const dispatchConfirm = () => appDispatch(confirmOrCancelCartProducts(true));
  const dispatchCancel = () => appDispatch(confirmOrCancelCartProducts(false));

  const handleConfirm = () => {
    dispatchConfirm();

    return navigateTo<'consumer'>('consumer-cart-address');
  };

  const handleCancel = () => {
    return dispatchCancel();
  };

  return (
    <C_S.Container>
      <S.Content>
        <S.RowInfo>
          <S.Info>Quantidade de produtos: </S.Info>
          <S.Info>{quantity}</S.Info>
        </S.RowInfo>
      </S.Content>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C.Map
            data={cart.current.products}
            render={(value, index) => (
              <C.ListConsumerProductCart key={index.toString()} productCart={value} />
            )}
          />
        </C_S.Content>
      </C_S.ScrollContainer>

      <C.IfElse
        condition={!ui.cartToTab.confirmedProducts}
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
    </C_S.Container>
  );
};
