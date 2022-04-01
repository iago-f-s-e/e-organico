import React from 'react';

import { If } from '@src/components/business';
import * as S from './styles';
import { Props } from './types';
import { getIcon } from './helpers';

export const Header = ({ handle, iconType, title }: Props): JSX.Element => {
  const icon = getIcon(iconType);
  // const label = getLabel(iconType);

  return (
    <S.Container>
      <S.BackButton onPress={handle}>{icon}</S.BackButton>

      <If condition={!!title?.length} render={() => <S.Title>{title}</S.Title>} />
    </S.Container>
  );
};
