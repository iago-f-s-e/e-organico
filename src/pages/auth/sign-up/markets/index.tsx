import React, { FC } from 'react';
import { FlatList } from 'react-native';

// TODO: navegar para produtos iniciais

import * as C from '@src/components';
import { Market } from '@src/store/slices/market/types';
import { ListSignUpMarket } from '@src/components/ui/list';
import * as C_S from '../common-styles';

const markets: Market[] = [
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
];

export const Markets: FC = () => {
  return (
    <C_S.Container>
      <C.Header handle={() => {}} title="Seleção de feiras" iconType="navigate-go-back" />
      <C_S.Container>
        <FlatList
          style={{ padding: 16 }}
          data={markets}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ListSignUpMarket market={item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
