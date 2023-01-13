import React from 'react';
import { Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colorSystem } from '@src/styles';
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
              <AntDesign name="right" size={22} color={colorSystem.main.secondary} />
            </S.Arrow>
          ),

          toBeTruthy: () => (
            <Switch
              trackColor={{ false: colorSystem.basic.silver, true: colorSystem.main.primary }}
              thumbColor={toggleValue ? colorSystem.main.secondary : colorSystem.main.primary}
              onValueChange={onClick}
              value={toggleValue}
            />
          ),
        }}
      />
    </S.Container>
  );
};
