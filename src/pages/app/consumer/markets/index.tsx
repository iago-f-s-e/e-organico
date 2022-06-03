import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { Market } from '@src/store/slices/market/types';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

const markets: Market[] = [];

export const Markets: FC = () => {
  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Ultimas feiras</C_S.Title>
          <C_S.ShowMore>ver mais</C_S.ShowMore>
        </C_S.TitleContainer>
        <FlatList
          data={markets}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <C.ListConsumerMarket market={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Feiras mais populares</C_S.Title>
        </C_S.TitleContainer>

        <FlatList
          data={markets}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <C.ListConsumerMarket market={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Todas as feiras</C_S.Title>
          <C_S.ShowMore>ver mais</C_S.ShowMore>
        </C_S.TitleContainer>

        <C.Map
          data={markets}
          render={(value, index) => <C.ListConsumerMarket key={index.toString()} market={value} />}
        />
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
