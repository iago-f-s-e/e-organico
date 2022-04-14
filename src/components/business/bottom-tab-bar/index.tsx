import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Map } from '../map';

import { MyTab } from './tab';
import * as S from './styles';

type Props = BottomTabBarProps;

export const MyBottomTabBar = ({ state, navigation }: Props): JSX.Element => {
  const handlePress = (isFocused: boolean, target: string, routeName: string): void => {
    const event = navigation.emit({
      type: 'tabPress',
      target,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({
        name: routeName,
        params: null,
        merge: true,
      });
    }
  };

  const handleLongPress = (key: string): void => {
    navigation.emit({
      type: 'tabLongPress',
      target: key,
    });
  };

  return (
    <S.Container>
      <Map
        data={state.routes}
        render={(value, index) => {
          const { key, name } = value;

          return (
            <MyTab
              key={key}
              myKey={key}
              isFocused={state.index === index}
              name={name}
              onLongPress={handleLongPress}
              onPress={handlePress}
            />
          );
        }}
      />
    </S.Container>
  );
};
