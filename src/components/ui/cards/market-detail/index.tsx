import React from 'react';
import { FlatList } from 'react-native';

import { handleInputMask } from '@src/utils';
import { Market } from '@src/store/slices/market/types';
import { ListWorkDay } from '../../list/work-day';

import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  market: Market;
};

export const MarketDetailCard = ({ market }: Props): JSX.Element => {
  const zipCode = handleInputMask(market.address.zipCode, 'zipCode');

  return (
    <C_S.Container>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.InfoContainer>
          <C_S.ImageContainer>
            <C_S.ImageContent source={{ uri: market.imagePath }} />
          </C_S.ImageContainer>

          <C_S.InfoContent>
            <C_S.Name>{market.name}</C_S.Name>
          </C_S.InfoContent>
        </C_S.InfoContainer>

        <C_S.SubTitleContainer>
          <C_S.SubTitle>Endereço</C_S.SubTitle>
        </C_S.SubTitleContainer>

        <C_S.AddressContainer>
          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>Rua:</C_S.AddressLabel>
              <C_S.AddressData>{market.address.street}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>

          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>Bairro:</C_S.AddressLabel>
              <C_S.AddressData>{market.address.district}</C_S.AddressData>
            </C_S.AddressContent>

            <C_S.AddressContent>
              <C_S.AddressLabel>Numero:</C_S.AddressLabel>
              <C_S.AddressData>{market.address.number}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>

          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>Cidade:</C_S.AddressLabel>
              <C_S.AddressData>{market.address.city}</C_S.AddressData>
            </C_S.AddressContent>

            <C_S.AddressContent>
              <C_S.AddressLabel>Estado:</C_S.AddressLabel>
              <C_S.AddressData>{market.address.state}</C_S.AddressData>
            </C_S.AddressContent>
          </C_S.AddressSection>

          <C_S.AddressSection>
            <C_S.AddressContent>
              <C_S.AddressLabel>CEP:</C_S.AddressLabel>
              <C_S.AddressData>{zipCode}</C_S.AddressData>
            </C_S.AddressContent>

            <C_S.AddressContent>
              <C_S.AddressLabel>Complemento:</C_S.AddressLabel>
              <C_S.AddressData>{market.address.state}</C_S.AddressData>
            </C_S.AddressContent>

            <S.WorkDaysSection>
              <S.WorkDaysTitle>Dias de funcionamento</S.WorkDaysTitle>
              <S.WorkDaysContainer>
                <FlatList
                  data={market.wordDays}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => <ListWorkDay workDay={item} />}
                  keyExtractor={(_, index) => index.toString()}
                />
              </S.WorkDaysContainer>
            </S.WorkDaysSection>
          </C_S.AddressSection>
        </C_S.AddressContainer>
      </C_S.ScrollContainer>
    </C_S.Container>
  );
};
