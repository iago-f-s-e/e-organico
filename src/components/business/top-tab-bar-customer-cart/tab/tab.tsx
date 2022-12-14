import React, { useMemo } from 'react';
import { Animated } from 'react-native';
import { useAppSelector } from '@src/store';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@src/config/theme';
import { getLabel } from './utils';

import * as S from './styles';
import { If } from '../../if';

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
  const { cartToTab } = useAppSelector((state) => state.ui);

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

  const confirmedProducts = useMemo(
    () => name === 'consumer-cart-products' && cartToTab.confirmedProducts,
    [name, cartToTab.confirmedProducts],
  );
  const confirmedAddress = useMemo(
    () => name === 'consumer-cart-address' && cartToTab.confirmedAddress,
    [name, cartToTab.confirmedAddress],
  );
  const confirmedPayment = useMemo(
    () => name === 'consumer-cart-payment' && cartToTab.confirmedPayment,
    [name, cartToTab.confirmedPayment],
  );

  const confirmed = useMemo(
    () => confirmedProducts || confirmedAddress || confirmedPayment,
    [confirmedProducts, confirmedAddress, confirmedPayment],
  );

  return (
    <S.Container onPress={handlePress} onLongPress={handleLongPress}>
      <Animated.Text style={{ opacity, marginRight: 2 }}>
        <If
          condition={confirmed}
          render={() => <AntDesign name="checkcircleo" size={15} color={colors.main.primary} />}
        />
      </Animated.Text>
      <Animated.Text style={{ opacity }}>
        <S.Label>{label}</S.Label>
      </Animated.Text>
    </S.Container>
  );
};
