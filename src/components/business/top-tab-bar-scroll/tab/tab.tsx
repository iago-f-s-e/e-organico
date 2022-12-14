import React from 'react';
import { Animated } from 'react-native';
import { getLabel } from './utils';

import * as S from './styles';

type Props = {
  indices: number[];
  currIndex: number;
  name: string;
  isFocused: boolean;
  position: Animated.AnimatedInterpolation;
  myKey: string;
  onPress: (isFocused: boolean, target: string, routeName: string) => void;
  onLongPress: (key: string) => void;
};

export const MyTab = ({
  name,
  position,
  indices,
  currIndex,
  myKey,
  isFocused,
  onLongPress,
  onPress,
}: Props): JSX.Element => {
  const label = getLabel(name);

  const opacity = position.interpolate({
    inputRange: indices,
    outputRange: indices.map((index) => (index === currIndex ? 1 : 0.2)),
  });

  const handlePress = () => {
    onPress(isFocused, myKey, name);
  };

  const handleLongPress = () => {
    onLongPress(myKey);
  };

  return (
    <S.Container onPress={handlePress} onLongPress={handleLongPress}>
      <Animated.Text style={{ opacity }}>
        <S.Label>{label}</S.Label>
      </Animated.Text>
    </S.Container>
  );
};
