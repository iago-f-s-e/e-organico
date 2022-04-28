import { WorkDay } from '@src/store/slices/market/types';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@src/config/theme';
import { toPTDay } from '@src/utils';
import React from 'react';

import { If } from '@src/components/business';
import * as S from './style';

type Props = {
  workDay: WorkDay;
  select?: (workDay: WorkDay) => void;
  selected?: WorkDay;
};

export const ListWorkDay = ({ workDay, select, selected }: Props): JSX.Element => {
  const day = toPTDay(workDay.day);
  const time = `de ${workDay.open} até ${workDay.close}`;

  const isSelected = selected && selected.day === workDay.day;

  return (
    <S.Container disabled={!select} onPress={() => select?.(workDay)}>
      <S.Header>
        <S.Day>{day}</S.Day>
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
