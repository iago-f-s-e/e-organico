import React from 'react';

import { handleInputMask } from '@src/utils';
import { UserDetail } from '@src/store/slices/user/types';
import * as C_S from '../common-styles';

type Props = {
  consumer: UserDetail;
};

export const ConsumerDetailCard = ({ consumer }: Props): JSX.Element => {
  const rating = `Avaliação: ${consumer.score.rating}`;
  const sales = `Compras: ${consumer.score.transactions}`;
  const zipCode = handleInputMask(consumer.address.zipCode, 'zipCode');
  const image =
    'https://www.amigodoclima.com.br/wp-content/themes/amigodoclima/img/not-available.png';

  return (
    <C_S.Container>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.InfoContainer>
          <C_S.ImageContainer>
            <C_S.ImageContent source={{ uri: image }} />
          </C_S.ImageContainer>

          <C_S.InfoContent>
            <C_S.Name>{consumer.name}</C_S.Name>
            <C_S.Info>{rating}</C_S.Info>
            <C_S.Info>{sales}</C_S.Info>
          </C_S.InfoContent>
        </C_S.InfoContainer>

        <C_S.SubTitleContainer>
          <C_S.SubTitle>Propriedade</C_S.SubTitle>
        </C_S.SubTitleContainer>

        <C_S.AddressContainer>
          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>Rua:</C_S.AddressLabel>
              <C_S.AddressData>{consumer.address.street}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>

          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>Bairro:</C_S.AddressLabel>
              <C_S.AddressData>{consumer.address.district}</C_S.AddressData>
            </C_S.AddressContent>

            <C_S.AddressContent>
              <C_S.AddressLabel>Numero:</C_S.AddressLabel>
              <C_S.AddressData>{consumer.address.number}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>

          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>Cidade:</C_S.AddressLabel>
              <C_S.AddressData>{consumer.address.city}</C_S.AddressData>
            </C_S.AddressContent>

            <C_S.AddressContent>
              <C_S.AddressLabel>Estado:</C_S.AddressLabel>
              <C_S.AddressData>{consumer.address.state}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>

          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>CEP:</C_S.AddressLabel>
              <C_S.AddressData>{zipCode}</C_S.AddressData>
            </C_S.AddressContent>

            <C_S.AddressContent>
              <C_S.AddressLabel>Complemento:</C_S.AddressLabel>
              <C_S.AddressData>{consumer.address.state}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>
        </C_S.AddressContainer>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
