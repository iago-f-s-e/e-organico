import React, { useEffect, useCallback, useState } from 'react';
import { Animated } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useAppSelector } from '@src/store';
import { Map } from '../map';

import { MyTab } from './tab';

type Props = BottomTabBarProps;

export const MyBottomTabBar = ({ state, navigation }: Props): JSX.Element => {
  const { showBottomTab } = useAppSelector((state) => state.ui);
  const [sizeContainer] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
  const [opacityContainer] = useState(new Animated.ValueXY({ x: 1, y: 0 }));

  const handleOpenBottomTab = () => {
    Animated.parallel([
      Animated.timing(sizeContainer.y, {
        toValue: 50,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacityContainer.x, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleCloseBottomTab = () => {
    Animated.parallel([
      Animated.timing(sizeContainer.y, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacityContainer.x, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

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

  const openOrCloseBottomTab = useCallback(() => {
    if (showBottomTab) return handleOpenBottomTab();

    return handleCloseBottomTab();
  }, [showBottomTab]); // eslint-disable-line

  useEffect(() => {
    openOrCloseBottomTab();
  }, [openOrCloseBottomTab]);

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        height: sizeContainer.y,
        opacity: opacityContainer.x,
      }}
    >
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
    </Animated.View>
  );
};
