import React, { FC, useEffect } from 'react';

import { hideBottomTab, useAppDispatch, useAppSelector } from '@src/store';

import * as C from '@src/components';
import * as C_S from '../../common-styles';

export const Products: FC = () => {
  const { cart } = useAppSelector((state) => state);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(hideBottomTab());
  }, [appDispatch]);

  return (
    <C_S.Container>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Quantidade de produtos</C_S.Title>
          </C_S.TitleContainer>
        </C_S.Content>

        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Produtos, buscar produtos</C_S.Title>
          </C_S.TitleContainer>

          <C.Map
            data={cart.current.products}
            render={(value, index) => (
              <C.ListConsumerProductCart key={index.toString()} productCart={value} />
            )}
          />
        </C_S.Content>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
