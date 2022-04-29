import React, { FC } from 'react';
import { FlatList } from 'react-native';

import { User } from '@src/store/slices/user/types';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

const defaultImage =
  'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

const producers: User[] = [
  {
    id: 'id1',
    imagePath: defaultImage,
    name: 'zé',
    phone: '99999999999',
    score: {
      rating: 0,
      transactions: 0,
    },
  },
  {
    id: 'id2',
    imagePath: defaultImage,
    name: 'zé',
    phone: '99999999999',
    score: {
      rating: 0,
      transactions: 0,
    },
  },
  {
    id: 'id3',
    imagePath: defaultImage,
    name: 'zé',
    phone: '99999999999',
    score: {
      rating: 0,
      transactions: 0,
    },
  },
  {
    id: 'id4',
    imagePath: defaultImage,
    name: 'zé',
    phone: '99999999999',
    score: {
      rating: 0,
      transactions: 0,
    },
  },
  {
    id: 'id5',
    imagePath: defaultImage,
    name: 'zé',
    phone: '99999999999',
    score: {
      rating: 0,
      transactions: 0,
    },
  },
  {
    id: 'id6',
    imagePath: defaultImage,
    name: 'zé',
    phone: '99999999999',
    score: {
      rating: 0,
      transactions: 0,
    },
  },
  {
    id: 'id7',
    imagePath: defaultImage,
    name: 'zé',
    phone: '99999999999',
    score: {
      rating: 0,
      transactions: 0,
    },
  },
  {
    id: 'id8',
    imagePath: defaultImage,
    name: 'zé',
    phone: '99999999999',
    score: {
      rating: 0,
      transactions: 0,
    },
  },
];

export const Producers: FC = () => {
  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Últimos feirantes</C_S.Title>
          <C_S.ShowMore>ver mais</C_S.ShowMore>
        </C_S.TitleContainer>
        <FlatList
          data={producers}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <C.ListConsumerProducer producer={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Todas os feirantes</C_S.Title>
          <C_S.ShowMore>ver mais</C_S.ShowMore>
        </C_S.TitleContainer>

        <C.Map
          data={producers}
          render={(value, index) => (
            <C.ListConsumerProducer key={index.toString()} producer={value} />
          )}
        />
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
