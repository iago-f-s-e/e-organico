import React, { FC } from 'react';

import * as C from '@src/components';
import * as C_S from '../common-styles';

export const Producer: FC = () => {
  return (
    <C_S.Container>
      <C.Header title="Nome do produto" />
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Informações</C_S.Title>
          </C_S.TitleContainer>
        </C_S.Content>

        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Feiras</C_S.Title>
          </C_S.TitleContainer>
        </C_S.Content>

        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Produtos</C_S.Title>
            <C_S.ShowMore>ver mais</C_S.ShowMore>
          </C_S.TitleContainer>
        </C_S.Content>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
