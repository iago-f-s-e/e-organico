import React, { useEffect, useState, useCallback } from 'react';
import { Animated } from 'react-native';

import { handleInputMask } from '@src/utils';
import { Market, Workday } from '@src/store/slices/market/types';
import { ScrollHorizontal } from '@src/components/business/scroll-horizontal';
import { Map } from '@src/components/business';
import { ListWorkday } from '../../list';

import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  market: Market;
  weekday: Workday;
  change: boolean;
  actions: {
    selectDay: (weekday: Workday) => void;
    confirmChange: () => void;
    cancelChange: () => void;
  };
};

export const CartMarketDetailCard = ({ market, actions, weekday, change }: Props): JSX.Element => {
  const zipCode = handleInputMask(market.address.zipCode, 'zipCode');

  const [sizeContainer] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [opacityContent] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const handleOpenButtons = () => {
    Animated.parallel([
      Animated.timing(sizeContainer.y, {
        toValue: 40,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(opacityContent.x, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleCloseButtons = () => {
    Animated.parallel([
      Animated.timing(sizeContainer.y, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacityContent.x, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleOpenOrCloseButtons = useCallback(() => {
    if (change) return handleOpenButtons();

    return handleCloseButtons();
  }, [change]); // eslint-disable-line

  useEffect(() => {
    handleOpenOrCloseButtons();
  }, [handleOpenOrCloseButtons]);

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
          </C_S.AddressSection>

          <S.WorkDaysSection>
            <C_S.WorkDaysTitle>Escolha o dia</C_S.WorkDaysTitle>
            <C_S.WorkDaysContainer>
              <ScrollHorizontal
                render={() => (
                  <Map
                    data={market.workdays}
                    render={(item, index) => (
                      <ListWorkday
                        workDay={item}
                        selected={weekday}
                        select={actions.selectDay}
                        key={index.toString()}
                      />
                    )}
                  />
                )}
              />
            </C_S.WorkDaysContainer>
          </S.WorkDaysSection>
        </C_S.AddressContainer>
      </C_S.ScrollContainer>

      <Animated.View
        style={{
          opacity: opacityContent.x,
          height: sizeContainer.y,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <S.ButtonConfirm onPress={actions.confirmChange}>
          <S.ButtonLabel>Trocar</S.ButtonLabel>
        </S.ButtonConfirm>

        <S.ButtonCancel onPress={actions.cancelChange}>
          <S.ButtonLabel>Cancelar troca</S.ButtonLabel>
        </S.ButtonCancel>
      </Animated.View>
    </C_S.BigContainer>
  );
};
