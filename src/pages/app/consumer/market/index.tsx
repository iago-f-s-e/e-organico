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
  producers: [],
  wordDays: [
    {
      close: '17:00',
      day: 'FRIDAY',
      open: '08:00',
    },
  ],
};

export const Market: FC = () => {
  return (
    <C_S.Container nestedScrollEnabled showsVerticalScrollIndicator={false}>
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
    </C_S.Container>
  );
};
