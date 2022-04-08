import { WorkDay } from '@src/store/slices/market/types';
import { toPTDay } from '@src/utils';
import React from 'react';

import * as S from './style';

type Props = {
  workDay: WorkDay;
};

export const ListWorkDay = ({ workDay }: Props): JSX.Element => {
  const day = toPTDay(workDay.day);
  const time = `de ${workDay.open} até ${workDay.close}`;

  return (
    <S.Main>
      <S.Container>
        <S.Header>
          <S.Day>{day}</S.Day>
        </S.Header>
        <S.Content>
          <S.Time style={{ transform: [{ rotateZ: '-20deg' }] }}>{time}</S.Time>
        </S.Content>
        <S.Footer />
      </S.Container>
      <S.Border />
    </S.Main>
  );
};
