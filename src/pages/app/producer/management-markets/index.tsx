import React, { FC, useEffect } from 'react';

import { useAppNavigation } from '@src/hooks';
import * as C from '@src/components';
import { hideBottomTab, useAppDispatch } from '@src/store';
import * as C_S from '../../common-styles';

export const ManagementMarkets: FC = () => {
  const appDispatch = useAppDispatch();
  const { onFocus } = useAppNavigation();

  const handleOnMount = () => {
    appDispatch(hideBottomTab());
  };

  useEffect(() => {
    const focus = onFocus(handleOnMount);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Gerenciar Feiras" />

      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Menos vendidos</C_S.Title>
          </C_S.TitleContainer>
        </C_S.Content>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
