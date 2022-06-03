import React, { FC, useEffect } from 'react';
import { FlatList } from 'react-native';

import { ProducerDetail } from '@src/store/slices/producer/types';
import * as C from '@src/components';
import { hideBottomTab, useAppDispatch } from '@src/store';
import { useAppNavigation } from '@src/hooks';
import * as C_S from '../../common-styles';

const imagePath =
  'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

// TODO: buscar da api
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
      image: imagePath,
      address: {
        city: 'cidade',
        complement: 'complement',
        district: 'district',
        number: '55',
        state: 'state',
        street: 'street',
        zipCode: '49000-000',
      },
      workdays: [],
    },

    {
      id: 'id2',
      name: 'feira do zé',
      image: imagePath,
      address: {
        city: 'cidade',
        complement: 'complement',
        district: 'district',
        number: '55',
        state: 'state',
        street: 'street',
        zipCode: '49000-000',
      },
      workdays: [],
    },
  ],
  products: [
    {
      id: 'producer_product_id',
      harvestDate: new Date(),
      price: '5',
      product: null,
      stock: '5',
      unitMeasure: 'un',
    },
    {
      id: 'producer_product_id2',
      harvestDate: new Date(),
      price: '7.55',
      product: null,
      stock: '7.55',
      unitMeasure: 'un',
    },
  ],
  propertyImages: [{ imagePath }, { imagePath }, { imagePath }, { imagePath }],
};

export const Producer: FC = () => {
  const appDispatch = useAppDispatch();
  const { onFocus } = useAppNavigation();

  useEffect(() => {
    const focus = onFocus(() => appDispatch(hideBottomTab()));

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Vendedor" />
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <C.ProducerDetailCard producer={producer} />
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

          <C.Map
            data={producer.products}
            render={(value, index) => <C.ListConsumerProduct key={index.toString()} data={value} />}
          />
        </C_S.Content>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
