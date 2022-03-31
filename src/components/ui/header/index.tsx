import React from 'react';

import * as S from './styles';
import { Props } from './types';
import { getIcon, getLabel } from './helpers';

export const Header = ({ handle, iconType }: Props): JSX.Element => {
  const icon = getIcon(iconType);
  const label = getLabel(iconType);

  return (
    <S.Container>
      <S.BackButton onPress={handle}>
        {icon}
        <S.Label>{label}</S.Label>
      </S.BackButton>
    </S.Container>
  );
};
