import React, { FC } from 'react';

import * as C from '@src/components';
import { ProductDetail } from '@src/store/slices/product/types';
import * as C_S from '../common-styles';
import * as S from './styles';

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

export const Product: FC = () => {
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
          <S.IncOrDecButton>
            <S.IncOrDecLabel>-</S.IncOrDecLabel>
          </S.IncOrDecButton>
          <S.Quantity>5</S.Quantity>
          <S.IncOrDecButton>
            <S.IncOrDecLabel>+</S.IncOrDecLabel>
          </S.IncOrDecButton>
        </S.InputContent>

        <S.InputButton>
          <S.ButtonLabel>Adicionar</S.ButtonLabel>
          <S.ButtonLabel>R$ 5,00</S.ButtonLabel>
        </S.InputButton>
      </S.InputContainer>
    </C_S.Container>
  );
};
