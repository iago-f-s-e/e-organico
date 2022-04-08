import React, { useState, useMemo } from 'react';
import { Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors } from '@src/config/theme';
import { useAppSelector } from '@src/store';
import { Product } from '@src/store/slices/product/types';
import { SignUpProductPayload } from '@src/store/slices/sign-up-product/types';
import * as S from './styles';

import { getIcon } from './util';

type Props = {
  product: Product;
  actions: {
    select: (state: SignUpProductPayload) => void;
    remove: (state: SignUpProductPayload) => void;
    onOpenAnimation: () => void;
    onCloseAnimation: () => void;
  };
};

const initialState: SignUpProductPayload = {
  product: {
    id: '',
    name: '',
    unitMeasures: [],
  },
  stock: '',
  harvestDate: '',
  unitMeasure: '',
};

export const ListSignUpProduct = ({ product, actions }: Props): JSX.Element => {
  const { signUpProduct } = useAppSelector((state) => state);

  const [state, setState] = useState<SignUpProductPayload>(initialState);
  const [sizeContainer] = useState(new Animated.ValueXY({ x: 0, y: 50 }));
  const [opacityContent] = useState(new Animated.ValueXY({ x: 1, y: 0 }));
  const [opened, setOpened] = useState<boolean>(false);

  const current = useMemo(() => {
    const found = signUpProduct.find((value) => product.id === value.product.id);

    if (found) {
      setState(found);

      return found;
    }

    setState((state) => ({ ...state, product }));
    return found;
  }, [signUpProduct, product]);

  const selected = useMemo(() => !!current, [current]);

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
    actions.select(state);
    openOrCloseAnimation();
  };

  const handleRemove = () => {
    actions.remove(state);
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
          <S.Name selected={selected}>{state.product.name}</S.Name>
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
          <S.Content>
            <S.StockAndPrice>
              <S.InputContainer>
                <S.Label>Estoque:</S.Label>

                <S.StockContainer>
                  <S.IncrementOrDecrement>
                    <S.LabelSelectOrRemove>-</S.LabelSelectOrRemove>
                  </S.IncrementOrDecrement>

                  <S.InputStock />

                  <S.IncrementOrDecrement>
                    <S.LabelSelectOrRemove>+</S.LabelSelectOrRemove>
                  </S.IncrementOrDecrement>
                </S.StockContainer>
              </S.InputContainer>

              <S.InputContainer>
                <S.Label>Preço:</S.Label>

                <S.PriceContainer>
                  <Feather name="edit" size={15} color={colors.basic.white} />
                  <S.InputPrice placeholder="teste" />
                </S.PriceContainer>
              </S.InputContainer>
            </S.StockAndPrice>
          </S.Content>
          <S.SelectOrRemove selected={selected} onPress={handleSelectOrRemove}>
            <S.LabelSelectOrRemove>{label}</S.LabelSelectOrRemove>
          </S.SelectOrRemove>
        </Animated.View>
      </S.Container>
    </Animated.View>
  );
};
