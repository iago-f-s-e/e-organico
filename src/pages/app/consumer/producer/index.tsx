import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { ProducerDetail } from '@src/store/slices/producer/types';
import * as C from '@src/components';
import * as C_S from '../common-styles';

const imagePath =
  'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

const producer: ProducerDetail = {
  address: {
    city: 'city',
    complement: 'complement',
    district: 'district',
    number: 'number',
    state: 'state',
    street: 'street',
    zipCode: '99999999',
  },
  id: 'id',
  imagePath,
  name: 'zé',
  phone: '99999999999',
  score: {
    rating: 55151,
    transactions: 551,
  },
  markets: [
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
  ],
  products: [],
  propertyImages: [{ imagePath }, { imagePath }, { imagePath }, { imagePath }],
};

export const Producer: FC = () => {
  return (
    <C_S.Container>
      <C.Header title="Nome do produto" />
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C.UserDetailCard producer={producer} />
        </C_S.Content>

        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Feiras</C_S.Title>
          </C_S.TitleContainer>

          <FlatList
            data={producer.markets}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <C.ListConsumerMarket market={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </C_S.Content>
        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Produtos</C_S.Title>
            <C_S.ShowMore>ver mais</C_S.ShowMore>
          </C_S.TitleContainer>
        </C_S.Content>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
