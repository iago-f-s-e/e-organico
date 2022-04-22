import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { Market } from '@src/store/slices/market/types';
import * as C from '@src/components';
import * as C_S from '../common-styles';

const imagePath =
  'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

const markets: Market[] = [
  {
    id: 'id',
    name: 'feira do zé',
    imagePath,
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
    imagePath,
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
    imagePath,
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
    imagePath,
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
    imagePath,
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
