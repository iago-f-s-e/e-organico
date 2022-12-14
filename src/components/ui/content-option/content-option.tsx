import React from 'react';
import { Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '@src/config/theme';
import { IfElse, If } from '@src/components/business';
import { ContentOptionProps } from './types';

import * as S from './styles';

export const ContentOption = ({
  isTouchable,
  onClick,
  title,
  toggleValue,
  isToggleable,
  description,
}: ContentOptionProps): JSX.Element => {
  return (
    <S.Container disabled={!isTouchable} onPress={onClick}>
      <S.Content>
        <S.Tittle>{title}</S.Tittle>
        <If condition={!!description} render={() => <S.Description>{description}</S.Description>} />
      </S.Content>

      <IfElse
        condition={isToggleable}
        render={{
          toBeFalsy: () => (
            <S.Arrow onPress={onClick}>
              <AntDesign name="right" size={22} color={colors.main.secondary} />
            </S.Arrow>
          ),

          toBeTruthy: () => (
            <Switch
              trackColor={{ false: colors.basic.silver, true: colors.main.primary }}
              thumbColor={toggleValue ? colors.main.secondary : colors.main.primary}
              onValueChange={onClick}
              value={toggleValue}
            />
          ),
        }}
      />
    </S.Container>
  );
};
