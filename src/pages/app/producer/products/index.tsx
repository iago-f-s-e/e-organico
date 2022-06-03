import { ProductDetail } from '@src/store/slices/product/types';
import React, { FC } from 'react';

import * as C from '@src/components';
import * as C_S from '../../common-styles';

// TODO: buscar da api
const products: ProductDetail[] = [];

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
