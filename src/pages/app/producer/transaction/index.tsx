import React, { FC, useEffect, useMemo, useState } from 'react';
import { hideBottomTab, useAppDispatch } from '@src/store';
import { useAppNavigation } from '@src/hooks';

import * as C from '@src/components';
import { getWaitingTime, handleInputMask, toPTDay } from '@src/utils';
import * as C_S from '../../common-styles';
import * as S from './styles';

const transaction: any = null;

// TODO: integrar com backend

export const Transaction: FC = () => {
  const appDispatch = useAppDispatch();
  const { onFocus } = useAppNavigation();

  const [waitingTime, setWaitingTime] = useState<string>('');

  const total = useMemo(() => handleInputMask(transaction.total, 'money', { onlyComma: true }), []);

  const transactionType = useMemo(() => {
    if (transaction.type === 'pick') return 'Retirar na feira';

    return 'Entrar para o cliente';
  }, []);

  const showWaitingTime = useMemo(
    () => transaction.status === 'waiting-for-confirmation-from-the-producer',
    [],
  );

  const market = useMemo(() => {
    if (transaction.type !== 'pick') return { has: false, name: '', weekday: '' };

    const { name } = transaction.market;
    const weekday = toPTDay(transaction.selectedDay.weekday);

    return { has: true, name, weekday };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setWaitingTime(getWaitingTime(transaction.createdAt)), 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const focus = onFocus(() => appDispatch(hideBottomTab()));

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Pedido" />

      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Informações do consumidor</C_S.Title>
          </C_S.TitleContainer>

          <C.ConsumerDetailCard consumer={transaction.consumer} />
        </C_S.Content>

        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Informações gerais</C_S.Title>
          </C_S.TitleContainer>

          <S.GeneralInformation>
            <S.Section>
              <S.Label>Numero do pedido:</S.Label>
              <S.Data>{`Nº ${transaction.number}`}</S.Data>
            </S.Section>

            <S.Section>
              <S.Label>Tipo do pedido:</S.Label>
              <S.Data>{transactionType}</S.Data>
            </S.Section>

            <C.If
              condition={showWaitingTime}
              render={() => (
                <S.Section>
                  <S.Label>Tempo em espera:</S.Label>
                  <S.Data>{waitingTime}</S.Data>
                </S.Section>
              )}
            />

            <C.If
              condition={market.has}
              render={() => (
                <>
                  <S.Section>
                    <S.Label>Feira:</S.Label>
                    <S.Data>{market.name}</S.Data>
                  </S.Section>

                  <S.Section>
                    <S.Label>Dia Escolhido:</S.Label>
                    <S.Data>{market.weekday}</S.Data>
                  </S.Section>
                </>
              )}
            />

            <S.Section>
              <S.Label>Forma de pagamento:</S.Label>
              <S.Data>{transaction.payment.name}</S.Data>
            </S.Section>

            <S.Section>
              <S.Label>Total:</S.Label>
              <S.Money>{total}</S.Money>
            </S.Section>
          </S.GeneralInformation>
        </C_S.Content>

        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Produtos</C_S.Title>
            <C_S.SubTitle>{`Quantidade: ${transaction.productQuantity}`}</C_S.SubTitle>
          </C_S.TitleContainer>

          <C.Map
            data={transaction.products}
            render={(value, index) => (
              <C.ListProducerTransactionProduct
                key={index.toString()}
                transactionProduct={value as any}
              />
            )}
          />
        </C_S.Content>
      </C_S.ScrollContainer>
      <S.Buttons>
        <S.Button>
          <C_S.ButtonConfirm onPress={() => {}}>
            <C_S.ButtonLabel>Confirmar</C_S.ButtonLabel>
          </C_S.ButtonConfirm>
        </S.Button>
        <S.Button>
          <C_S.ButtonCancel onPress={() => {}}>
            <C_S.ButtonLabel>Cancelar</C_S.ButtonLabel>
          </C_S.ButtonCancel>
        </S.Button>
      </S.Buttons>
    </C_S.Container>
  );
};
