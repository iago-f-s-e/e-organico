import React, { useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Cart } from '@src/store/slices/cart/types';

import { If } from '@src/components/business';
import { colors } from '@src/config/theme';
import { useAppNavigation } from '@src/hooks';
import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  cart: Cart;
};

export const CartDetailCard = ({ cart }: Props): JSX.Element => {
  const { navigateTo } = useAppNavigation();

  const cartMarket = useMemo(() => {
    if (cart.current.information?.type !== 'pick' || !cart.current.information.market) {
      return { hasMarket: false, name: '' };
    }

    return { hasMarket: true, name: cart.current.information.market.name };
  }, [cart]);

  const hasPayment = useMemo(() => !!cart.current.payment, [cart]);

  return (
    <C_S.MediumContainer>
      <S.Container>
        <S.Header onPress={() => navigateTo<'consumer'>('consumer-cart')}>
          <S.Title>Pedido em andamento</S.Title>
          <Ionicons name="open-outline" size={20} color={colors.main.primary} />
        </S.Header>

        <If
          condition={cartMarket.hasMarket}
          render={() => (
            <S.Section>
              <S.Label>Feira:</S.Label>
              <S.Data>{cartMarket.name}</S.Data>
            </S.Section>
          )}
        />

        <S.Section>
          <S.Label>Feirante:</S.Label>
          <S.Data>{cart.current.producer.name}</S.Data>
        </S.Section>

        <S.Section>
          <S.Label>Quantidade de produtos:</S.Label>
          <S.Data>{cart.current.productQuantity}</S.Data>
        </S.Section>

        <If
          condition={hasPayment}
          render={() => (
            <S.Section>
              <S.Label>Forma de pagamento:</S.Label>
              <S.Data>{cart.current.payment.name}</S.Data>
            </S.Section>
          )}
        />

        <S.Section>
          <S.Label>Total:</S.Label>
          <S.Money>{cart.current.total}</S.Money>
        </S.Section>
      </S.Container>
    </C_S.MediumContainer>
  );
};
