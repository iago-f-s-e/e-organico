import { ProductDetail } from '@src/store/slices/product/types';
import React, { FC } from 'react';

import * as C from '@src/components';
import * as C_S from '../../common-styles';

const imagePath =
  'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

const products: ProductDetail[] = [
  {
    id: 'producer_product_id',
    harvestDate: new Date(),
    price: '5',
    product: {
      id: 'product_id',
      name: 'Banana',
      imagePath,
      unitMeasures: [],
    },
    stock: '5',
    unitMeasure: 'un',
  },
  {
    id: 'producer_product_id2',
    harvestDate: new Date(),
    price: '8.55',
    product: {
      id: 'product_id2',
      name: 'Queijo',
      imagePath,
      unitMeasures: [],
    },
    stock: '7.55',
    unitMeasure: 'un',
  },
];

export const Products: FC = () => {
  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Mais vendidos</C_S.Title>
        </C_S.TitleContainer>

        <C.ScrollHorizontal
          render={() => (
            <C.Map
              data={products}
              render={(value, index) => (
                <C.ListProducerProduct key={index.toString()} data={value} />
              )}
            />
          )}
        />
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Menos vendidos</C_S.Title>
        </C_S.TitleContainer>

        <C.ScrollHorizontal
          render={() => (
            <C.Map
              data={products}
              render={(value, index) => (
                <C.ListProducerProduct key={index.toString()} data={value} />
              )}
            />
          )}
        />
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Estoque baixo</C_S.Title>
        </C_S.TitleContainer>

        <C.ScrollHorizontal
          render={() => (
            <C.Map
              data={products}
              render={(value, index) => (
                <C.ListProducerProduct key={index.toString()} data={value} />
              )}
            />
          )}
        />
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Todos os produtos</C_S.Title>
        </C_S.TitleContainer>

        <C.Map
          data={products}
          render={(value, index) => <C.ListProducerProduct key={index.toString()} data={value} />}
        />
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
