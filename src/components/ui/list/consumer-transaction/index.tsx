import React, { useMemo } from 'react';
import { MinimalConsumerTransaction } from '@src/store/slices/transaction/types';

import { translateTransactionStatus, handleInputMask } from '@src/utils';
import { If } from '@src/components/business';
import { useAppNavigation } from '@src/hooks';
import * as S from './styles';

type Props = {
  transaction: MinimalConsumerTransaction;
};

// TODO: criar transaction number

export const ListConsumerTransaction = ({ transaction }: Props): JSX.Element => {
  const { navigateTo } = useAppNavigation();

  const cartMarket = useMemo(() => {
    if (transaction.type !== 'pick' || !transaction.market) {
      return { hasMarket: false, name: '' };
    }

    return { hasMarket: true, name: transaction.market.name };
  }, [transaction]);

  const status = translateTransactionStatus(transaction.status, 'consumer');

  const total = handleInputMask(transaction.total, 'money', { onlyComma: true });

  const handleNavigate = () =>
    navigateTo<'consumer'>('consumer-transaction', { id: transaction.id });

  return (
    <S.Container>
      <S.Header>
        <S.StatusContainer>
          <S.StatusContent>
            <S.Status>{status}</S.Status>
          </S.StatusContent>
        </S.StatusContainer>

        <S.TransactionNumberContainer>
          <S.TransactionNumber>{`Nº ${transaction.number}`}</S.TransactionNumber>
        </S.TransactionNumberContainer>
      </S.Header>
      <S.Content>
        <S.InfoContainer>
          <S.ProducerName>{transaction.producer.name}</S.ProducerName>
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

        <S.ButtonsContainer>
          <S.OpenTransactionButton onPress={handleNavigate}>
            <S.OpenTransactionLabel>Visualizar</S.OpenTransactionLabel>
          </S.OpenTransactionButton>
        </S.ButtonsContainer>
      </S.Content>
    </S.Container>
  );
};
