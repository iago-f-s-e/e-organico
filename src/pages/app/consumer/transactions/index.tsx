import React, { FC, useEffect, useMemo } from 'react';

import { showBottomTab, useAppDispatch, useAppSelector } from '@src/store';
import { useAppNavigation } from '@src/hooks';
import * as C from '@src/components';
import * as C_S from '../../common-styles';
import * as S from './styles';

export const Transactions: FC = () => {
  const { cart } = useAppSelector((state) => state);
  const { onFocus } = useAppNavigation();
  const appDispatch = useAppDispatch();

  const hasCurrentCart = useMemo(() => cart.hasCurrent, [cart]);

  useEffect(() => {
    const focus = onFocus(() => appDispatch(showBottomTab()));

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Pedidos" />

      <C.If
        condition={hasCurrentCart}
        render={() => (
          <C_S.TitleContainer>
            <C_S.Title>Montando pedido</C_S.Title>
          </C_S.TitleContainer>
        )}
      />

      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Pedidos em andamento</C_S.Title>
            <C_S.ShowMore>ver mais</C_S.ShowMore>
          </C_S.TitleContainer>
        </C_S.Content>

        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Pedidos já enviados</C_S.Title>
          </C_S.TitleContainer>
        </C_S.Content>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
