import React from 'react';
import { FlatList } from 'react-native';

import { handleInputMask } from '@src/utils';
import { ProducerDetail } from '@src/store/slices/producer/types';
import * as C_S from '../common-styles';
import * as S from './styles';
import { ListPropertyImage } from '../../list';

type Props = {
  producer: ProducerDetail;
};

export const UserDetailCard = ({ producer }: Props): JSX.Element => {
  const rating = `Avaliação: ${producer.score.rating}`;
  const sales = `Vendas: ${producer.score.transactions}`;
  const zipCode = handleInputMask(producer.address.zipCode, 'zipCode');

  return (
    <C_S.Container>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.InfoContainer>
          <C_S.ImageContainer>
            <C_S.ImageContent source={{ uri: producer.imagePath }} />
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
          <S.AddressSection>
            <S.AddressContent>
              <S.LabelAddress>Rua:</S.LabelAddress>
              <S.DataAddress>{producer.address.street}</S.DataAddress>
            </S.AddressContent>
          </S.AddressSection>

          <S.AddressSection>
            <S.AddressContent>
              <S.LabelAddress>Bairro:</S.LabelAddress>
              <S.DataAddress>{producer.address.district}</S.DataAddress>
            </S.AddressContent>

            <S.AddressContent>
              <S.LabelAddress>Numero:</S.LabelAddress>
              <S.DataAddress>{producer.address.number}</S.DataAddress>
            </S.AddressContent>
          </S.AddressSection>

          <S.AddressSection>
            <S.AddressContent>
              <S.LabelAddress>Cidade:</S.LabelAddress>
              <S.DataAddress>{producer.address.city}</S.DataAddress>
            </S.AddressContent>

            <S.AddressContent>
              <S.LabelAddress>Estado:</S.LabelAddress>
              <S.DataAddress>{producer.address.state}</S.DataAddress>
            </S.AddressContent>
          </S.AddressSection>

          <S.AddressSection>
            <S.AddressContent>
              <S.LabelAddress>CEP:</S.LabelAddress>
              <S.DataAddress>{zipCode}</S.DataAddress>
            </S.AddressContent>

            <S.AddressContent>
              <S.LabelAddress>Complemento:</S.LabelAddress>
              <S.DataAddress>{producer.address.state}</S.DataAddress>
            </S.AddressContent>
          </S.AddressSection>

          <FlatList
            data={producer.propertyImages}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <ListPropertyImage propertyImage={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </S.PropertyContainer>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
