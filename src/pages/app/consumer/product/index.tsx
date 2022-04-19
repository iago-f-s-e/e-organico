import React, { FC, useEffect, useReducer, useMemo } from 'react';

import * as C from '@src/components';
import { ProductDetail } from '@src/store/slices/product/types';
import { hideBottomTab, showBottomTab, useAppDispatch } from '@src/store';
import { handlerInputMask } from '@src/utils';
import { If } from '@src/components';
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

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    price: Number(product.price),
    total: handlerInputMask(product.price, 'money', { onlyComma: true }),
  });

  const handleDecrement = () => dispatch({ type: 'decrementQuantity' });
  const handleIncrement = () => dispatch({ type: 'incrementQuantity' });

  const canDecrease = useMemo(() => Number(state.quantity) > 1, [state]);

  useEffect(() => {
    appDispatch(hideBottomTab());

    return () => {
      appDispatch(showBottomTab());
    };
  }, [appDispatch]);

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

        <S.InputButton>
          <S.ButtonLabel>Adicionar</S.ButtonLabel>
          <S.ButtonLabel>{state.total}</S.ButtonLabel>
        </S.InputButton>
      </S.InputContainer>
    </C_S.Container>
  );
};
