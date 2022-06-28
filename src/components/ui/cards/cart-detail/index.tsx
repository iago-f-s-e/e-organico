import React, { useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { If } from '@src/components/business';
import { colors } from '@src/config/theme';
import { MinimalTransaction } from '@src/store/slices/transaction/types';
import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  transaction: MinimalTransaction;
};

export const TransactionDetailCard = ({ transaction }: Props): JSX.Element => {
  const cartMarket = useMemo(() => {
    if (transaction.information?.type !== 'pick' || !transaction.information.market) {
      return { hasMarket: false, name: '' };
    }

    return { hasMarket: true, name: transaction.information.market.name };
  }, [transaction]);

  return (
    <C_S.MediumContainer>
      <S.Container>
        <S.Header onPress={() => {}}>
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
          <S.Data>{transaction.producer.name}</S.Data>
        </S.Section>

        <S.Section>
          <S.Label>Quantidade de produtos:</S.Label>
          <S.Data>{transaction.productQuantity}</S.Data>
        </S.Section>

        <S.Section>
          <S.Label>Forma de pagamento:</S.Label>
          <S.Data>{transaction.payment.name}</S.Data>
        </S.Section>

        <S.Section>
          <S.Label>Total:</S.Label>
          <S.Money>{transaction.total}</S.Money>
        </S.Section>
      </S.Container>
    </C_S.MediumContainer>
  );
};
