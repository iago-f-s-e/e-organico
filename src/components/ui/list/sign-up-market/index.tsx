import React, { useState, useMemo } from 'react';
import { Animated, FlatList } from 'react-native';
import { Market } from '@src/store/slices/market/types';

import { colors } from '@src/config/theme';
import { useAppSelector } from '@src/store';
import * as S from './styles';

import { ListWorkday } from '../work-day';
import { getIcon } from './util';

type Props = {
  market: Market;
  actions: {
    select: (market: Market) => void;
    remove: (market: Market) => void;
    onOpenAnimation: () => void;
    onCloseAnimation: () => void;
  };
};

export const ListSignUpMarket = ({ market, actions }: Props): JSX.Element => {
  const { signUpMarket } = useAppSelector((state) => state);

  const [sizeContainer] = useState(new Animated.ValueXY({ x: 0, y: 50 }));
  const [opacityContent] = useState(new Animated.ValueXY({ x: 1, y: 0 }));
  const [opened, setOpened] = useState<boolean>(false);

  const selected = useMemo(
    () => !!signUpMarket.find(({ id }) => market.id === id),
    [market.id, signUpMarket],
  );

  const icon = useMemo(() => getIcon(selected, opened), [selected, opened]);
  const label = useMemo(() => {
    if (selected) return 'Remover';

    return 'Selecionar';
  }, [selected]);

  const handleOpenAnimation = () => {
    actions.onOpenAnimation();

    Animated.parallel([
      Animated.timing(sizeContainer.y, {
        toValue: 400,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(opacityContent.x, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();

    setOpened(true);
  };

  const handleCloseAnimation = () => {
    actions.onCloseAnimation();

    Animated.parallel([
      Animated.timing(sizeContainer.y, {
        toValue: 50,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacityContent.x, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();

    setOpened(false);
  };

  const openOrCloseAnimation = () => {
    if (opened) return handleCloseAnimation();

    return handleOpenAnimation();
  };

  const handleSelect = () => {
    actions.select(market);
    openOrCloseAnimation();
  };

  const handleRemove = () => {
    actions.remove(market);
    openOrCloseAnimation();
  };

  const handleSelectOrRemove = () => {
    if (selected) return handleRemove();

    return handleSelect();
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        height: sizeContainer.y,
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colors.main.primary,
        backgroundColor: colors.basic.white,
        overflow: 'hidden',
      }}
    >
      <S.Container>
        <S.Header selected={selected} onPress={openOrCloseAnimation}>
          <S.Name selected={selected}>{market.name}</S.Name>
          {icon}
        </S.Header>

        <Animated.View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            opacity: opacityContent.x,
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
                data={market.workdays}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <ListWorkday workDay={item} />}
                keyExtractor={(_, index) => index.toString()}
              />
            </S.ContainerWorkDays>
          </S.Section>

          <S.SelectOrRemove selected={selected} onPress={handleSelectOrRemove}>
            <S.LabelSelectOrRemove>{label}</S.LabelSelectOrRemove>
          </S.SelectOrRemove>
        </Animated.View>
      </S.Container>
    </Animated.View>
  );
};
