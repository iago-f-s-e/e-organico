import React from 'react';

import { handleInputMask } from '@src/utils';
import { Market } from '@src/store/slices/market/types';
import { ScrollHorizontal } from '@src/components/business/scroll-horizontal';
import { Map } from '@src/components/business';
import { ListWorkday } from '../../list/work-day';

import * as C_S from '../common-styles';

type Props = {
  market: Market;
};

export const MarketDetailCard = ({ market }: Props): JSX.Element => {
  const zipCode = handleInputMask(market.address.zipCode, 'zipCode');

  return (
    <C_S.BigContainer>
      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.InfoContainer>
          <C_S.ImageContainer>
            <C_S.ImageContent source={{ uri: market.image }} />
          </C_S.ImageContainer>

          <C_S.InfoContent>
            <C_S.Name>{market.name}</C_S.Name>
          </C_S.InfoContent>
        </C_S.InfoContainer>

        <C_S.SubTitleContainer>
          <C_S.SubTitle>Endereço</C_S.SubTitle>
        </C_S.SubTitleContainer>

        <C_S.AddressContainer style={{ paddingBottom: 50 }}>
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
          </C_S.AddressSection>

          <C_S.WorkDaysSection>
            <C_S.WorkDaysTitle>Dias de funcionamento</C_S.WorkDaysTitle>
            <C_S.WorkDaysContainer>
              <ScrollHorizontal
                render={() => (
                  <Map
                    data={market.workdays}
                    render={(item, index) => <ListWorkday workDay={item} key={index.toString()} />}
                  />
                )}
              />
            </C_S.WorkDaysContainer>
          </C_S.WorkDaysSection>
        </C_S.AddressContainer>
      </C_S.ScrollContainer>
    </C_S.BigContainer>
  );
};
