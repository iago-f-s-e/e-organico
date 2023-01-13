import React from 'react';
import { colorSystem } from '@src/styles';
import { getIcon, getLabel } from './util';

import * as S from './styles';

type Props = {
  name: string;
  isFocused: boolean;
  myKey: string;
  onPress: (isFocused: boolean, target: string, routeName: string) => void;
  onLongPress: (key: string) => void;
};

export const MyTab = ({ name, myKey, isFocused, onLongPress, onPress }: Props): JSX.Element => {
  const label = getLabel(name);
  const icon = getIcon(name, isFocused);
  const color = isFocused ? colorSystem.main.primary : colorSystem.basic.grey;

  const handlePress = () => {
    onPress(isFocused, myKey, name);
  };

  const handleLongPress = () => {
    onLongPress(myKey);
  };

  return (
    <S.Container>
      <S.Content onPress={handlePress} onLongPress={handleLongPress}>
        {icon}
        <S.Label style={{ color }}>{label}</S.Label>
      </S.Content>
    </S.Container>
  );
};
