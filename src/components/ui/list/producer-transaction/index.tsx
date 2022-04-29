import React, { useMemo, useEffect, useState } from 'react';
import { Transaction } from '@src/store/slices/transaction/types';

import { getWaitingTime, toPTDay, translateTransactionStatus, handleInputMask } from '@src/utils';
import { If } from '@src/components/business';
import * as S from './styles';

type Props = {
  transaction: Transaction;
  showWaitingTime?: boolean;
};

export const ListProducerTransaction = ({ transaction, showWaitingTime }: Props): JSX.Element => {
  const [waitingTime, setWaitingTime] = useState<string>('');

  const market = useMemo(() => {
    if (transaction.type !== 'pick') return { has: false, name: '', day: '' };

    const { name } = transaction.market;
    const day = toPTDay(transaction.selectedDay.day);

    return { has: true, name, day };
  }, [transaction]);

  const status = translateTransactionStatus(transaction.status, 'producer'); // TODO: usar userType dinâmico

  const total = handleInputMask(transaction.total, 'money', { onlyComma: true });

  useEffect(() => {
    const interval = setInterval(() => setWaitingTime(getWaitingTime(transaction.createdAt)), 1000);

    return () => clearInterval(interval);
  }, [transaction.createdAt]);

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
          <S.ConsumerName>{transaction.consumer.name}</S.ConsumerName>
          <S.Money>{total}</S.Money>
        </S.InfoContainer>

        <If
          condition={showWaitingTime}
          render={() => (
            <S.Section>
              <S.Label>Tempo em espera:</S.Label>
              <S.Data>{waitingTime}</S.Data>
            </S.Section>
          )}
        />

        <If
          condition={market.has}
          render={() => (
            <S.Section>
              <S.Label>Feira:</S.Label>
              <S.Data>{market.name}</S.Data>
            </S.Section>
          )}
        />

        <If
          condition={market.has}
          render={() => (
            <S.Section>
              <S.Label>Dia da entrega:</S.Label>
              <S.Data>{market.day}</S.Data>
            </S.Section>
          )}
        />

        <S.Section>
          <S.Label>Quantidade de produtos:</S.Label>
          <S.Data>{transaction.productQuantity}</S.Data>
        </S.Section>
      </S.Content>
    </S.Container>
  );
};
