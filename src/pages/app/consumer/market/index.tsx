import React, { FC } from 'react';
import { FlatList } from 'react-native';

import * as C from '@src/components';
import { Market as MarketState } from '@src/store/slices/market/types';
import * as S from './styles';

const markets: MarketState[] = [
  {
    id: 'id',
    name: 'feira do zé',
    address: {
      city: 'cidade',
      complement: 'complement',
      district: 'district',
      number: '55',
      state: 'state',
      street: 'street',
      zipCode: '49000-000',
    },
    wordDays: [
      {
        day: 'MONDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'TUESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'WEDNESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'THURSDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'FRIDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SATURDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SUNDAY',
        close: '22:00',
        open: '07:30',
      },
    ],
  },
  {
    id: 'id2',
    name: 'feira do zé',
    address: {
      city: 'cidade',
      complement: 'complement',
      district: 'district',
      number: '55',
      state: 'state',
      street: 'street',
      zipCode: '49000-000',
    },
    wordDays: [
      {
        day: 'MONDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'TUESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'WEDNESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'THURSDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'FRIDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SATURDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SUNDAY',
        close: '22:00',
        open: '07:30',
      },
    ],
  },
  {
    id: 'id3',
    name: 'feira do zé',
    address: {
      city: 'cidade',
      complement: 'complement',
      district: 'district',
      number: '55',
      state: 'state',
      street: 'street',
      zipCode: '49000-000',
    },
    wordDays: [
      {
        day: 'MONDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'TUESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'WEDNESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'THURSDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'FRIDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SATURDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SUNDAY',
        close: '22:00',
        open: '07:30',
      },
    ],
  },
  {
    id: 'id4',
    name: 'feira do zé',
    address: {
      city: 'cidade',
      complement: 'complement',
      district: 'district',
      number: '55',
      state: 'state',
      street: 'street',
      zipCode: '49000-000',
    },
    wordDays: [
      {
        day: 'MONDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'TUESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'WEDNESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'THURSDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'FRIDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SATURDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SUNDAY',
        close: '22:00',
        open: '07:30',
      },
    ],
  },
  {
    id: 'id5',
    name: 'feira do zé',
    address: {
      city: 'cidade',
      complement: 'complement',
      district: 'district',
      number: '55',
      state: 'state',
      street: 'street',
      zipCode: '49000-000',
    },
    wordDays: [
      {
        day: 'MONDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'TUESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'WEDNESDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'THURSDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'FRIDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SATURDAY',
        close: '22:00',
        open: '07:30',
      },
      {
        day: 'SUNDAY',
        close: '22:00',
        open: '07:30',
      },
    ],
  },
];

export const Market: FC = () => {
  return (
    <S.Container nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <S.Content>
        <S.TitleContainer>
          <S.Title>Ultimas feiras</S.Title>
          <S.ShowMore>ver mais</S.ShowMore>
        </S.TitleContainer>
        <FlatList
          data={markets}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <C.ListConsumerMarket market={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </S.Content>

      <S.Content>
        <S.TitleContainer>
          <S.Title>Feiras mais populares</S.Title>
          <S.ShowMore>ver mais</S.ShowMore>
        </S.TitleContainer>

        <FlatList
          data={markets}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <C.ListConsumerMarket market={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </S.Content>

      <S.Content>
        <S.TitleContainer>
          <S.Title>Todas as feiras</S.Title>
          <S.ShowMore>ver mais</S.ShowMore>
        </S.TitleContainer>

        <C.Map
          data={markets}
          render={(value, index) => <C.ListConsumerMarket key={index.toString()} market={value} />}
        />
      </S.Content>
    </S.Container>
  );
};
