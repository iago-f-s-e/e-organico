import React from 'react';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import * as S from './styles';
import { Map } from '../map';
import { MyTab } from './tab';

type Props = MaterialTopTabBarProps;

export const TopTabBarCustomerCart = ({ state, position, navigation }: Props): JSX.Element => {
  const indices = state.routes.map((_, index) => index);

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
              currIndex={index}
              indices={indices}
              position={position}
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
