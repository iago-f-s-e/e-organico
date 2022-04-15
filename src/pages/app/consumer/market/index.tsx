import { MarketDetail } from '@src/store/slices/market/types';
import React, { FC } from 'react';

import * as C from '@src/components';
import * as C_S from '../common-styles';

const _defaultImage =
  'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

const market: MarketDetail = {
  id: 'id',
  address: {
    city: 'city',
    complement: 'complement',
    district: 'district',
    number: '5',
    state: 'state',
    street: 'street',
    zipCode: '99999999',
  },
  isOpen: true,
  name: 'feira do zé',
  producers: [
    {
      id: 'id',
      imagePath: _defaultImage,
      name: 'zé',
      phone: '99999999999',
      score: {
        rating: 5,
        transactions: 1215511,
      },
    },

    {
      id: 'id2',
      imagePath: _defaultImage,
      name: 'zé',
      phone: '99999999999',
      score: {
        rating: 5,
        transactions: 1215511,
      },
    },
  ],
  wordDays: [
    {
      close: '17:00',
      day: 'FRIDAY',
      open: '08:00',
    },
  ],
};

// TODO: adicionar filtro de feirantes
// TODO: adicionar produtos mais vendidos

export const Market: FC = () => {
  return (
    <C_S.Container>
      <C.Header title="Nome da feira" />
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C_S.TitleContainer>
            <C_S.Title>Feirantes</C_S.Title>
            <C_S.ShowMore>ver mais</C_S.ShowMore>
          </C_S.TitleContainer>

          <C.Map
            data={market.producers}
            render={(value, index) => (
              <C.ListConsumerProducer key={index.toString()} producer={value} />
            )}
          />
        </C_S.Content>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
