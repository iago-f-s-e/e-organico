import React, { FC, useEffect } from 'react';

import { useAppNavigation } from '@src/hooks';
import { showBottomTab, useAppDispatch } from '@src/store';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

export const Stall: FC = () => {
  const appDispatch = useAppDispatch();
  const { navigateTo, onFocus } = useAppNavigation();

  const handleOnFocus = () => {
    appDispatch(showBottomTab());
  };

  useEffect(() => {
    const focus = onFocus(handleOnFocus);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C.ContentOption
        isTouchable
        onClick={() => navigateTo<'producer'>('producer-management-products')}
        title="Produtos"
        description="Adicione novos produtos"
      />
      <C.ContentOption
        isTouchable
        onClick={() => navigateTo<'producer'>('producer-management-markets')}
        title="Feiras"
        description="Entre em novas feiras"
      />
    </C_S.ScrollContainer>
  );
};
