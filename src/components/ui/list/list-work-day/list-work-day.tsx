import { Workday } from '@src/store/slices/market/types';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@src/config/theme';
import { toPTDay } from '@src/utils';
import React from 'react';

import { If } from '@src/components/business';
import * as S from './style';

type Props = {
  workDay: Workday;
  select?: (workDay: Workday) => void;
  selected?: Workday;
};

export const ListWorkday = ({ workDay, select, selected }: Props): JSX.Element => {
  const weekday = toPTDay(workDay.weekday);
  const time = `de ${workDay.opening} até ${workDay.closing}`;

  const isSelected = selected && selected.weekday === workDay.weekday;

  return (
    <S.Container disabled={!select} onPress={() => select?.(workDay)}>
      <S.Header>
        <S.Day>{weekday}</S.Day>
      </S.Header>
      <S.Content>
        <S.Time style={{ transform: [{ rotateZ: '-20deg' }] }}>{time}</S.Time>

        <If
          condition={isSelected}
          render={() => (
            <S.Icon>
              <AntDesign name="checkcircle" size={20} color={colors.main.primary} />
            </S.Icon>
          )}
        />
      </S.Content>
      <S.Footer />
    </S.Container>
  );
};
