import React, { useMemo, useEffect, useState } from 'react';
import { MinimalProducerTransaction } from '@src/store/slices/transaction/types';

import { getWaitingTime, toPTDay, translateTransactionStatus, handleInputMask } from '@src/utils';
import { If } from '@src/components/business';
import { useAppNavigation } from '@src/hooks';
import * as S from './styles';

type Props = {
  transaction: MinimalProducerTransaction;
  showWaitingTime?: boolean;
  hideRequest?: boolean;
  inRequisition?: boolean;
  onRequest?: (id: string) => void;
};

export const ListProducerTransaction = ({
  transaction,
  showWaitingTime,
  inRequisition,
  onRequest,
  hideRequest,
}: Props): JSX.Element => {
  const { navigateTo } = useAppNavigation();

  const [waitingTime, setWaitingTime] = useState<string>('');

  const market = useMemo(() => {
    if (transaction.type !== 'pick') return { has: false, name: '', weekday: '' };

    const { name } = transaction.market;
    const weekday = toPTDay(transaction.selectedDay.weekday);

    return { has: true, name, weekday };
  }, [transaction]);

  const label = useMemo(() => {
    switch (transaction.status) {
      case 'waiting-for-consumer-to-withdraw':
        return 'Entregar';

      case 'in-separation':
        return 'Confirmar';

      default:
        return 'Aceitar';
    }
  }, [transaction.status]);

  const status = translateTransactionStatus(transaction.status, 'producer'); // TODO: usar userType dinâmico

  const total = handleInputMask(transaction.total, 'money', { onlyComma: true });

  const handleNavigate = () =>
    navigateTo<'producer'>('producer-transaction', { id: transaction.id });

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
              <S.Data>{market.weekday}</S.Data>
            </S.Section>
          )}
        />

        <S.Section>
          <S.Label>Quantidade de produtos:</S.Label>
          <S.Data>{transaction.productQuantity}</S.Data>
        </S.Section>

        <S.ButtonsContainer>
          <If
            condition={!hideRequest}
            render={() => (
              <S.ConfirmTransactionButton
                disabled={inRequisition}
                onPress={() => onRequest?.(transaction.id)}
              >
                <S.ConfirmTransactionLabel>{label}</S.ConfirmTransactionLabel>
              </S.ConfirmTransactionButton>
            )}
          />

          <S.OpenTransactionButton onPress={handleNavigate}>
            <S.OpenTransactionLabel>Visualizar</S.OpenTransactionLabel>
          </S.OpenTransactionButton>
        </S.ButtonsContainer>
      </S.Content>
    </S.Container>
  );
};
