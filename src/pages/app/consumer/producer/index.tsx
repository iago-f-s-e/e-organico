import React, { FC } from 'react';
import { FlatList } from 'react-native';

import * as C from '@src/components';
import { User } from '@src/store/slices/user/types';
import * as S from './styles';

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

export const Producer: FC = () => {
  return (
    <S.Container nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <S.Content>
        <S.TitleContainer>
          <S.Title>Últimos feirantes</S.Title>
          <S.ShowMore>ver mais</S.ShowMore>
        </S.TitleContainer>
        <FlatList
          data={producers}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <C.ListConsumerProducer producer={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </S.Content>

      <S.Content>
        <S.TitleContainer>
          <S.Title>Todas os feirantes</S.Title>
          <S.ShowMore>ver mais</S.ShowMore>
        </S.TitleContainer>

        <C.Map
          data={producers}
          render={(value, index) => (
            <C.ListConsumerProducer key={index.toString()} producer={value} />
          )}
        />
      </S.Content>
    </S.Container>
  );
};
