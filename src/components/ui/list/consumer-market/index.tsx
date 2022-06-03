import React from 'react';
import { Market } from '@src/store/slices/market/types';

import { useAppNavigation } from '@src/hooks';
import { updateMarketSection, useAppDispatch } from '@src/store';
import { If } from '@src/components/business';
import { colors } from '@src/config/theme';
import * as C_S from '../common-styles';
import { Selected } from '../../selected';

type Props = {
  market: Market;
  current?: Market;
  selected?: Market;
  onSelect?: (market: Market) => void;
};

export const ListConsumerMarket = ({ market, onSelect, current, selected }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const { navigateTo } = useAppNavigation();

  const isSelected = selected && selected.id === market.id;

  const isCurrent = current && current.id === market.id;

  const borderCurrent = {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.main.primary,
  };

  const handlePress = () => {
    if (onSelect) return onSelect(market);

    dispatch(updateMarketSection(market));

    return navigateTo<'consumer'>('consumer-market');
  };

  return (
    <C_S.Container style={isCurrent ? borderCurrent : undefined}>
      <C_S.ImageContainer>
        <C_S.Image source={{ uri: market.image }} />
      </C_S.ImageContainer>
      <C_S.Content onPress={handlePress}>
        <C_S.Title>{market.name}</C_S.Title>
        <C_S.Info>{market.address.street}</C_S.Info>
        <C_S.Info>{market.address.district}</C_S.Info>

        <If condition={isSelected} render={() => <Selected />} />
      </C_S.Content>
    </C_S.Container>
  );
};
