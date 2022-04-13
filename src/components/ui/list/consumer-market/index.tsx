import React from 'react';
import { Market } from '@src/store/slices/market/types';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '@src/config/theme';
import * as S from './styles';

type Props = {
  market: Market;
};

export const ListConsumerMarket = ({ market }: Props): JSX.Element => {
  return (
    <S.Container>
      <S.Image />
      <S.Content>
        <S.Title>{market.name}</S.Title>
        <S.Info>{market.address.street}</S.Info>
        <S.Info>{market.address.district}</S.Info>
      </S.Content>

      <S.Like>
        <AntDesign name="heart" size={24} color={colors.entity.heart} />
      </S.Like>
    </S.Container>
  );
};