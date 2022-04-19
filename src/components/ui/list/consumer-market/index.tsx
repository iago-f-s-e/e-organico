import React from 'react';
import { Market } from '@src/store/slices/market/types';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '@src/config/theme';
import { useAppNavigation } from '@src/hooks';
import { updateSection, useAppDispatch } from '@src/store';
import * as C_S from '../common-styles';

type Props = {
  market: Market;
};

export const ListConsumerMarket = ({ market }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const { navigateTo } = useAppNavigation();

  const handleNavigate = () => {
    dispatch(updateSection({ marketId: market.id }));

    return navigateTo<'consumer'>('consumer-market');
  };

  return (
    <C_S.Container>
      <C_S.Image />
      <C_S.Content onPress={handleNavigate}>
        <C_S.Title>{market.name}</C_S.Title>
        <C_S.Info>{market.address.street}</C_S.Info>
        <C_S.Info>{market.address.district}</C_S.Info>
      </C_S.Content>

      <C_S.Like>
        <AntDesign name="heart" size={24} color={colors.entity.heart} />
      </C_S.Like>
    </C_S.Container>
  );
};
