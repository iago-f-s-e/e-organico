import React, { FC } from 'react';

import * as C_S from '../../common-styles';

// TODO: renderizar empty component
export const PendingTransactions: FC = () => {
  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Pedidos</C_S.Title>
        </C_S.TitleContainer>
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
