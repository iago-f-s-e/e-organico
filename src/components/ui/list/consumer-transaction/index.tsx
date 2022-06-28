import React, { useMemo } from 'react';
import { MinimalConsumerTransaction } from '@src/store/slices/transaction/types';

import { translateTransactionStatus, handleInputMask } from '@src/utils';
import { If } from '@src/components/business';
import * as S from './styles';

type Props = {
  transaction: MinimalConsumerTransaction;
};

// TODO: criar transaction number

export const ListConsumerTransaction = ({ transaction }: Props): JSX.Element => {
  const cartMarket = useMemo(() => {
    if (transaction.type !== 'pick' || !transaction.market) {
      return { hasMarket: false, name: '' };
    }

    return { hasMarket: true, name: transaction.market.name };
  }, [transaction]);

  const status = translateTransactionStatus(transaction.status, 'consumer');

  const total = handleInputMask(transaction.total, 'money', { onlyComma: true });

  return (
    <S.Container>
      <S.Header>
        <S.StatusContainer>
          <S.StatusContent>
            <S.Status>{status}</S.Status>
          </S.StatusContent>
        </S.StatusContainer>
      </S.Header>
      <S.Content>
        <S.InfoContainer>
          <S.Data>{transaction.producer.name}</S.Data>
          <S.Money>{total}</S.Money>
        </S.InfoContainer>

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
          <S.Label>Quantidade de produtos:</S.Label>
          <S.Data>{transaction.productQuantity}</S.Data>
        </S.Section>

        <S.Section>
          <S.Label>Forma de pagamento:</S.Label>
          <S.Data>{transaction.payment.name}</S.Data>
        </S.Section>
      </S.Content>
    </S.Container>
  );
};
