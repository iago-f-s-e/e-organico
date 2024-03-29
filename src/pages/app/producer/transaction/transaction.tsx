import React, { FC, useEffect, useReducer } from 'react';
import { hideBottomTab, useAppDispatch } from '@src/store';
import { useApi, useAppNavigation } from '@src/hooks';

import * as C from '@src/components';

import { colorSystem } from '@src/styles';
import { ProducerTransactionDetail } from '@src/store/slices/transaction/types';
import * as C_S from '../../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

export const Transaction: FC = () => {
  const appDispatch = useAppDispatch();
  const { onFocus, goBack, navigateTo, getIdParams } = useAppNavigation();
  const api = useApi();

  const [state, dispatch] = useReducer(reducer, { ...initialState, idParam: getIdParams() });

  const onOpenConfirm = () => dispatch({ type: 'changeConfirm', payload: true });
  const onCloseConfirm = () => dispatch({ type: 'changeConfirm', payload: false });
  const onOpenCancel = () => dispatch({ type: 'changeCancel', payload: true });
  const onCloseCancel = () => dispatch({ type: 'changeCancel', payload: false });
  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeTransaction = (payload: ProducerTransactionDetail) =>
    dispatch({ type: 'onChangeTransaction', payload });

  const handleOpenRequisition = () => {
    api
      .getProducerTransactionById(state.idParam)
      .then((transaction) => onChangeTransaction(transaction))
      .finally(() => onCloseRequisition());
  };

  const handleRequestConfirm = async () => {
    switch (state.transaction.status) {
      case 'in-separation':
        return api
          .separateTransaction(state.idParam)
          .then(() => navigateTo<'producer'>('transactions', null, { popNavigationToTop: true }));

      case 'waiting-for-consumer-to-withdraw':
        return api
          .deliverTransaction(state.idParam)
          .then(() => navigateTo<'producer'>('transactions', null, { popNavigationToTop: true }));

      default:
        return api.confirmTransaction(state.idParam).then(() => goBack());
    }
  };

  const handleConfirm = () => {
    onOpenConfirm();

    handleRequestConfirm().finally(() => onCloseConfirm());
  };

  const handleCancel = () => {
    onOpenCancel();

    api
      .cancelTransaction(state.idParam)
      .then(() => goBack())
      .finally(() => onCloseCancel());
  };

  const handleOnFocus = () => {
    appDispatch(hideBottomTab());
    handleOpenRequisition();
  };

  useEffect(() => {
    const focus = onFocus(handleOnFocus);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Pedido" subTitle={state.status} />

      <C.IfElse
        condition={state.loading}
        render={{
          toBeTruthy: () => <C.Loading color={colorSystem.main.primary} sizeType="large" />,
          toBeFalsy: () => (
            <>
              <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
                <C_S.Content>
                  <C_S.TitleContainer>
                    <C_S.Title>Informações do consumidor</C_S.Title>
                  </C_S.TitleContainer>

                  <C.ConsumerDetailCard consumer={state.transaction.consumer} />
                </C_S.Content>

                <C_S.Content>
                  <C_S.TitleContainer>
                    <C_S.Title>Informações gerais</C_S.Title>
                  </C_S.TitleContainer>

                  <S.GeneralInformation>
                    <S.Section>
                      <S.Label>Numero do pedido:</S.Label>
                      <S.Data>{`Nº ${state.transaction.number}`}</S.Data>
                    </S.Section>

                    <S.Section>
                      <S.Label>Tipo do pedido:</S.Label>
                      <S.Data>{state.transactionType}</S.Data>
                    </S.Section>

                    <C.If
                      condition={state.showWaitingTime}
                      render={() => (
                        <S.Section>
                          <S.Label>Tempo em espera:</S.Label>
                          <S.Data>{state.waitingTime}</S.Data>
                        </S.Section>
                      )}
                    />

                    <C.If
                      condition={state.market.has}
                      render={() => (
                        <>
                          <S.Section>
                            <S.Label>Feira:</S.Label>
                            <S.Data>{state.market.name}</S.Data>
                          </S.Section>

                          <S.Section>
                            <S.Label>Dia Escolhido:</S.Label>
                            <S.Data>{state.market.weekday}</S.Data>
                          </S.Section>
                        </>
                      )}
                    />

                    <S.Section>
                      <S.Label>Forma de pagamento:</S.Label>
                      <S.Data>{state.transaction.payment.name}</S.Data>
                    </S.Section>

                    <S.Section>
                      <S.Label>Total:</S.Label>
                      <S.Money>{state.transaction.total}</S.Money>
                    </S.Section>
                  </S.GeneralInformation>
                </C_S.Content>

                <C_S.Content>
                  <C_S.TitleContainer>
                    <C_S.Title>Produtos</C_S.Title>
                    <C_S.SubTitle>{`Quantidade: ${state.transaction.productQuantity}`}</C_S.SubTitle>
                  </C_S.TitleContainer>

                  <C.Map
                    data={state.transaction.products}
                    render={(value, index) => (
                      <C.ListProducerTransactionProduct
                        key={index.toString()}
                        transactionProduct={value}
                      />
                    )}
                  />
                </C_S.Content>
              </C_S.ScrollContainer>

              <C.If
                condition={!state.hideCancel || !state.hideConfirm}
                render={() => (
                  <S.Buttons>
                    <C.If
                      condition={!state.hideConfirm}
                      render={() => (
                        <S.Button>
                          <C_S.ButtonConfirm
                            disabled={state.confirming || state.canceling}
                            onPress={handleConfirm}
                          >
                            <C.IfElse
                              condition={state.confirming}
                              render={{
                                toBeFalsy: () => <C_S.ButtonLabel>{state.label}</C_S.ButtonLabel>,
                                toBeTruthy: () => (
                                  <C.Loading color={colorSystem.basic.white} sizeType="large" />
                                ),
                              }}
                            />
                          </C_S.ButtonConfirm>
                        </S.Button>
                      )}
                    />

                    <C.If
                      condition={!state.hideCancel}
                      render={() => (
                        <S.Button>
                          <C_S.ButtonCancel
                            disabled={state.confirming || state.canceling}
                            onPress={handleCancel}
                          >
                            <C.IfElse
                              condition={state.canceling}
                              render={{
                                toBeFalsy: () => <C_S.ButtonLabel>Cancelar</C_S.ButtonLabel>,
                                toBeTruthy: () => (
                                  <C.Loading color={colorSystem.basic.white} sizeType="large" />
                                ),
                              }}
                            />
                          </C_S.ButtonCancel>
                        </S.Button>
                      )}
                    />
                  </S.Buttons>
                )}
              />
            </>
          ),
        }}
      />
    </C_S.Container>
  );
};
