import React, { useReducer, useCallback } from 'react';
import { Animated, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Market } from '@src/store/slices/market/types';

import { colors } from '@src/config/theme';
import * as S from './styles';

import { initialState, reducer } from './reducer';
import { ListWorkDay } from '../work-day';

type Props = {
  market: Market;
};

export const ListSignUpMarket = ({ market }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openOrCloseAnimation = useCallback(() => {
    if (state.opened) return dispatch({ type: 'onCloseAnimation' });

    return dispatch({ type: 'onOpenAnimation' });
  }, [state.opened]);

  return (
    <Animated.View
      style={{
        flex: 1,
        height: state.sizeContainer.y,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colors.main.primary,
        backgroundColor: colors.basic.white,
        overflow: 'hidden',
      }}
    >
      <S.Container>
        <S.Header onPress={openOrCloseAnimation}>
          <S.Name>{market.name}</S.Name>
          <AntDesign name="down" size={20} color={colors.main.primary} />
        </S.Header>

        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            opacity: state.opacityContent.x,
            backgroundColor: colors.basic.white,
          }}
        >
          <S.Section>
            <S.Title>Endereço</S.Title>

            <S.ContainerAddress>
              <S.ContentAddress>
                <S.LabelAddress>Cidade:</S.LabelAddress>
                <S.DataAddress>{market.address.city}</S.DataAddress>
              </S.ContentAddress>

              <S.ContentAddress>
                <S.LabelAddress>Estado:</S.LabelAddress>
                <S.DataAddress>{market.address.state}</S.DataAddress>
              </S.ContentAddress>

              <S.ContentAddress>
                <S.LabelAddress>Bairro:</S.LabelAddress>
                <S.DataAddress>{market.address.district}</S.DataAddress>
              </S.ContentAddress>

              <S.ContentAddress>
                <S.LabelAddress>Rua:</S.LabelAddress>
                <S.DataAddress>{market.address.street}</S.DataAddress>
              </S.ContentAddress>
            </S.ContainerAddress>
          </S.Section>

          <S.Section>
            <S.Title>Dias de funcionamento</S.Title>
            <S.ContainerWorkDays>
              <FlatList
                data={market.wordDays}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <ListWorkDay workDay={item} />}
                keyExtractor={(_, index) => index.toString()}
              />
            </S.ContainerWorkDays>
          </S.Section>

          <S.SelectOrRemove>
            <S.LabelConfirm>Selecionar</S.LabelConfirm>
          </S.SelectOrRemove>
        </Animated.View>
      </S.Container>
    </Animated.View>
  );
};
