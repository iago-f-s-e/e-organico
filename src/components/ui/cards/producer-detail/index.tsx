import React from 'react';
import { FlatList } from 'react-native';

import { handleInputMask } from '@src/utils';
import { ProducerWithAddressAndProperty } from '@src/store/slices/producer/types';
import * as C_S from '../common-styles';
import * as S from './styles';
import { ListPropertyImage } from '../../list';

type Props = {
  producer: ProducerWithAddressAndProperty;
};

export const ProducerDetailCard = ({ producer }: Props): JSX.Element => {
  const rating = `Avaliação: ${producer.score.rating}`;
  const sales = `Vendas: ${producer.score.transactions}`;
  const zipCode = handleInputMask(producer.address.zipCode, 'zipCode');

  return (
    <C_S.Container>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.InfoContainer>
          <C_S.ImageContainer>
            <C_S.ImageContent source={{ uri: producer.image }} />
          </C_S.ImageContainer>

          <C_S.InfoContent>
            <C_S.Name>{producer.name}</C_S.Name>
            <C_S.Info>{rating}</C_S.Info>
            <C_S.Info>{sales}</C_S.Info>
          </C_S.InfoContent>
        </C_S.InfoContainer>

        <C_S.SubTitleContainer>
          <C_S.SubTitle>Propriedade</C_S.SubTitle>
        </C_S.SubTitleContainer>

        <S.PropertyContainer>
          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>Rua:</C_S.AddressLabel>
              <C_S.AddressData>{producer.address.street}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>

          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>Bairro:</C_S.AddressLabel>
              <C_S.AddressData>{producer.address.district}</C_S.AddressData>
            </C_S.AddressContent>

            <C_S.AddressContent>
              <C_S.AddressLabel>Numero:</C_S.AddressLabel>
              <C_S.AddressData>{producer.address.number}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>

          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>Cidade:</C_S.AddressLabel>
              <C_S.AddressData>{producer.address.city}</C_S.AddressData>
            </C_S.AddressContent>

            <C_S.AddressContent>
              <C_S.AddressLabel>Estado:</C_S.AddressLabel>
              <C_S.AddressData>{producer.address.state}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>

          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>CEP:</C_S.AddressLabel>
              <C_S.AddressData>{zipCode}</C_S.AddressData>
            </C_S.AddressContent>

            <C_S.AddressContent>
              <C_S.AddressLabel>Complemento:</C_S.AddressLabel>
              <C_S.AddressData>{producer.address.state}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>

          <FlatList
            data={producer.property.images}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <ListPropertyImage imageDetail={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </S.PropertyContainer>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
