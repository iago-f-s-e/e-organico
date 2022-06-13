import React, { FC, useEffect, useReducer, useMemo } from 'react';

import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import {
  addProductToCart,
  hideBottomTab,
  setupCart,
  showToast,
  useAppDispatch,
  useAppSelector,
} from '@src/store';
import { useAppNavigation, useApi } from '@src/hooks';
import { colors } from '@src/config/theme';
import { handleInputMask } from '@src/utils';
import * as C from '@src/components';
import * as C_S from '../../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

// TODO: adicionar relacionados
// TODO: criar grupo para trazer produtos relacionados

export const Product: FC = () => {
  const appDispatch = useAppDispatch();
  const { cart, section } = useAppSelector((state) => state);
  const { navigateTo, onFocus, getIdParams } = useAppNavigation();
  const { getProducerProductById } = useApi();

  const [state, dispatch] = useReducer(reducer, { ...initialState, idParam: getIdParams() });

  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeProducerProduct = (payload: ProducerProductDetail) =>
    dispatch({ type: 'onChangeProducerProduct', payload });

  const showPrice = useMemo(
    () =>
      handleInputMask(state.price.toString(), 'money', {
        onlyComma: true,
      }),
    [state.price],
  );

  const handleOpenRequisition = () => {
    getProducerProductById(state.idParam, section.producer.id)
      .then((producerProduct) => onChangeProducerProduct(producerProduct))
      .finally(() => onCloseRequisition());
  };

  const handleDecrement = () => dispatch({ type: 'decrementQuantity' });
  const handleIncrement = () => dispatch({ type: 'incrementQuantity' });
  const handleToastError = () =>
    appDispatch(
      showToast({
        message: 'Você já possui um carrinho de compras em outro feirante!',
        type: 'error',
      }),
    );
  const handleSetupCart = () =>
    appDispatch(
      setupCart({
        producer: section.producer,
        product: {
          id: state.producerProduct.id,
          producerProduct: state.producerProduct,
          quantity: state.quantity,
          total: state.total,
        },
      }),
    );
  const handleAddToCart = () =>
    appDispatch(
      addProductToCart({
        id: state.producerProduct.id,
        producerProduct: state.producerProduct,
        quantity: state.quantity,
        total: state.total,
      }),
    );

  const handleSetupOrAdd = () => {
    if (!cart.hasCurrent) return handleSetupCart();

    return handleAddToCart();
  };

  const canDecrease = useMemo(() => Number(state.quantity) > 1, [state]);

  const handleAdd = () => {
    if (!cart.canChange) return handleToastError();

    handleSetupOrAdd();

    return navigateTo<'consumer'>('consumer-cart', null, { popNavigation: true });
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
      <C.Header />
      <C.IfElse
        condition={state.loading}
        render={{
          toBeTruthy: () => <C.Loading color={colors.main.primary} sizeType="large" />,
          toBeFalsy: () => (
            <>
              <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
                <C_S.Container>
                  <S.ImageContainer>
                    <S.ImageContent source={{ uri: state.producerProduct.image }} />
                  </S.ImageContainer>

                  <S.Title>{state.producerProduct.name}</S.Title>

                  <S.InfoContent>
                    <S.InfoSection>
                      <S.InfoLabel>Data de colheita:</S.InfoLabel>
                      <S.InfoData>{state.producerProduct.harvestDate}</S.InfoData>
                    </S.InfoSection>
                  </S.InfoContent>

                  <S.InfoContent>
                    <S.InfoSection>
                      <S.InfoLabel>Vendido por:</S.InfoLabel>
                      <S.InfoData>{state.producerProduct.unitMeasure.name}</S.InfoData>
                    </S.InfoSection>
                  </S.InfoContent>

                  <S.InfoContent>
                    <S.InfoSection>
                      <S.MoneyLabel>Valor p/ Kilo:</S.MoneyLabel>
                      <S.Money>{showPrice}</S.Money>
                    </S.InfoSection>
                  </S.InfoContent>
                </C_S.Container>
              </C_S.ScrollContainer>

              <S.InputContainer>
                <S.InputContent>
                  <S.IncOrDecButton disabled={!canDecrease} onPress={handleDecrement}>
                    <C.If
                      condition={canDecrease}
                      render={() => <S.IncOrDecLabel>-</S.IncOrDecLabel>}
                    />
                  </S.IncOrDecButton>

                  <S.Quantity>{state.quantity}</S.Quantity>

                  <S.IncOrDecButton onPress={handleIncrement}>
                    <S.IncOrDecLabel>+</S.IncOrDecLabel>
                  </S.IncOrDecButton>
                </S.InputContent>

                <S.InputButton onPress={handleAdd}>
                  <S.ButtonLabel>Adicionar</S.ButtonLabel>
                  <S.ButtonLabel>{state.total}</S.ButtonLabel>
                </S.InputButton>
              </S.InputContainer>
            </>
          ),
        }}
      />
    </C_S.Container>
  );
};
