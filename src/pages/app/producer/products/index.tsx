import React, { FC } from 'react';

import * as C_S from '../../common-styles';

export const Products: FC = () => {
  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Mais vendidos (horizontal)</C_S.Title>
        </C_S.TitleContainer>
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Menos vendidos (horizontal)</C_S.Title>
        </C_S.TitleContainer>
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Estoque baixo (horizontal)</C_S.Title>
        </C_S.TitleContainer>
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Todos os produtos</C_S.Title>
        </C_S.TitleContainer>
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
