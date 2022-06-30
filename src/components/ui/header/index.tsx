import React from 'react';

import { If } from '@src/components/business';
import * as S from './styles';
import { Props } from './types';

// TODO: definir as actions e header dinâmico por page
export const Header = ({ title, subTitle }: Props): JSX.Element => {
  return (
    <S.Container>
      <S.Info>
        <If condition={!!title?.length} render={() => <S.Title>{title}</S.Title>} />
        <If condition={!!subTitle?.length} render={() => <S.SubTitle>{subTitle}</S.SubTitle>} />
      </S.Info>
    </S.Container>
  );
};
