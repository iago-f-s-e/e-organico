import React, { FC } from 'react';

import * as C_S from '../../common-styles';

export const Stall: FC = () => {
  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Em construção</C_S.Title>
        </C_S.TitleContainer>
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
