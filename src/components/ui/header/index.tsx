import React from 'react';

import { If } from '@src/components/business';
import * as S from './styles';
import { Props } from './types';

// TODO: definir as actions e header dinâmico por page
export const Header = ({ title }: Props): JSX.Element => {
  return (
    <S.Container>
      <If condition={!!title?.length} render={() => <S.Title>{title}</S.Title>} />
    </S.Container>
  );
};
