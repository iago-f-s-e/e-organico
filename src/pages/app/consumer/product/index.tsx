import React, { FC, useEffect, useReducer, useMemo } from 'react';

import * as C from '@src/components';
import { ProductDetail } from '@src/store/slices/product/types';
import {
  addProductToCart,
  hideBottomTab,
  setupCart,
  showToast,
  useAppDispatch,
  useAppSelector,
} from '@src/store';
import { handleInputMask } from '@src/utils';
import { If } from '@src/components';
import { useAppNavigation } from '@src/hooks';
import * as C_S from '../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

const _defaultImage =
  'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

// TODO: adicionar relacionados

const product: ProductDetail = {
  harvestDate: new Date(),
  price: '5.00',
  product: {
    id: 'product_id',
    name: 'Tripa de cobra',
    unitMeasures: [],
  },
  stock: '500',
  unitMeasure: 'un',
};

// TODO: criar grupo para trazer produtos relacionados
// TODO: renderizar e atualizar state do reducer apenas dps de carregar os dados

export const Product: FC = () => {
  const appDispatch = useAppDispatch();
  const { cart, section } = useAppSelector((state) => state);
  const { navigateTo, onFocus } = useAppNavigation();

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    price: Number(product.price),
    total: handleInputMask(product.price, 'money', { onlyComma: true }),
  });

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
        producerId: section.producerId,
        product: {
          producerProduct: product,
          quantity: state.quantity,
          total: state.total,
        },
      }),
    );
  const handleAddToCart = () =>
    appDispatch(
      addProductToCart({
        producerProduct: product,
        quantity: state.quantity,
        total: state.total,
      }),
    );

  const canDecrease = useMemo(() => Number(state.quantity) > 1, [state]);

  const handleAdd = () => {
    if (!cart.canChange) return handleToastError();

    if (!cart.hasCurrent) return handleSetupCart();

    handleAddToCart();

    return navigateTo<'consumer'>('consumer-cart', null, { popNavigation: true });
  };

  useEffect(() => {
    const focus = onFocus(() => appDispatch(hideBottomTab()));

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header />
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Container>
          <S.ImageContainer>
            <S.ImageContent source={{ uri: _defaultImage }} />
          </S.ImageContainer>

          <S.Title>{product.product.name}</S.Title>

          <S.InfoContent>
            <S.InfoSection>
              <S.InfoLabel>Data de colheita:</S.InfoLabel>
              <S.InfoData>15/02/2021</S.InfoData>
            </S.InfoSection>
          </S.InfoContent>

          <S.InfoContent>
            <S.InfoSection>
              <S.InfoLabel>Validade:</S.InfoLabel>
              <S.InfoData>15/02/2021</S.InfoData>
            </S.InfoSection>
          </S.InfoContent>

          <S.InfoContent>
            <S.InfoSection>
              <S.InfoLabel>Vendido por:</S.InfoLabel>
              <S.InfoData>Kilo</S.InfoData>
            </S.InfoSection>
          </S.InfoContent>

          <S.InfoContent>
            <S.InfoSection>
              <S.MoneyLabel>Valor p/ Kilo:</S.MoneyLabel>
              <S.Money>R$ 5,00</S.Money>
            </S.InfoSection>
          </S.InfoContent>
        </C_S.Container>
      </C_S.ScrollContainer>

      <S.InputContainer>
        <S.InputContent>
          <S.IncOrDecButton disabled={!canDecrease} onPress={handleDecrement}>
            <If condition={canDecrease} render={() => <S.IncOrDecLabel>-</S.IncOrDecLabel>} />
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
    </C_S.Container>
  );
};
