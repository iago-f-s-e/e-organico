import React, { useState, useMemo } from 'react';
import { Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';

import { colors, font } from '@src/config/theme';
import { useAppSelector } from '@src/store';
import { handleInputMask } from '@src/utils';

import { translateDate } from '@src/utils';
import { UnitMeasure } from '@src/store/slices/unit-measure/types';
import { ProducerProduct } from '@src/store/slices/producer-product/type';
import { Product } from '@src/store/slices/product/types';
import * as S from './styles';

import { getIcon } from './util';
import { DatePicker } from '../../date-picker';

type Props = {
  unitMeasures: UnitMeasure[];
  product: Product;
  actions: {
    select: (state: ProducerProduct) => void;
    remove: (state: ProducerProduct) => void;
    onOpenAnimation?: () => void;
    onCloseAnimation?: () => void;
  };
};

const defaultUnitMeasure = {
  id: 'f6820857-afec-4cf1-a2c6-01fca0fb572c',
  abbreviation: 'un',
  name: 'Unidade',
};

const initialState: ProducerProduct = {
  id: '',
  product: {
    id: '',
    name: '',
    image: '',
    type: '[]',
  },
  price: 'R$ 0,00',
  stock: '0',
  harvestDate: new Date(),
  unitMeasure: defaultUnitMeasure,
};

// TODO: Mostrar detalhes no header

export const ListSignUpProduct = ({ product, actions, unitMeasures }: Props): JSX.Element => {
  const { signUpProduct } = useAppSelector((state) => state);

  const [state, setState] = useState<ProducerProduct>(initialState);
  const [sizeContainer] = useState(new Animated.ValueXY({ x: 0, y: 50 }));
  const [opacityContent] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [opened, setOpened] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const current = useMemo(() => {
    const found = signUpProduct.find((value) => product.id === value.product.id);

    if (found) {
      setState(found);

      return found;
    }

    const unitMeasure = unitMeasures.find(
      (value) => value.name === 'Unidade' || value.abbreviation === 'un',
    );

    setState((state) => ({ ...state, unitMeasure, product }));
    return found;
  }, [signUpProduct, product, unitMeasures]);

  const selected = useMemo(() => !!current, [current]);

  const icon = useMemo(() => getIcon(selected, opened), [selected, opened]);
  const label = useMemo(() => {
    if (selected) return 'Remover';

    return 'Selecionar';
  }, [selected]);

  const handleOpenAnimation = () => {
    actions.onOpenAnimation?.();

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
    actions.onCloseAnimation?.();

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

  const handleInputPrice = (price: string) => {
    setState((state) => ({
      ...state,
      price: handleInputMask(price, 'money', { withComma: true }),
    }));
  };

  const handleInputStock = (stock: string) => {
    const _stock = Number(stock);
    const isInvalid = Number.isNaN(_stock) || _stock < 0;

    if (isInvalid) return;

    setState((state) => ({ ...state, stock }));
  };

  const handleDatePicker = (harvestDate: Date) => {
    setState((state) => ({ ...state, harvestDate }));
  };

  const handleUnitPicker = (unitMeasure: UnitMeasure) => {
    setState((state) => ({ ...state, unitMeasure }));
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
            <S.PickerContainer>
              <S.Label>Unidade de medida: </S.Label>
              <S.PickerContent>
                <Picker
                  dropdownIconColor={colors.main.secondary}
                  onValueChange={(value) => handleUnitPicker(value)}
                  selectedValue={state.unitMeasure}
                >
                  {unitMeasures.map((item) => (
                    <Picker.Item
                      key={item.id}
                      style={{ fontFamily: font.family.bold, fontSize: 14 }}
                      color={colors.main.secondary}
                      label={item.name}
                      value={item}
                    />
                  ))}
                </Picker>
              </S.PickerContent>
            </S.PickerContainer>

            <S.PickerContainer>
              <S.Label>Data de colheita: </S.Label>
              <S.DatePickerContent onPress={() => setShowDatePicker(true)}>
                <DatePicker
                  show={showDatePicker}
                  hide={() => setShowDatePicker(false)}
                  value={state.harvestDate}
                  select={(value) => handleDatePicker(value)}
                />
                <Feather name="edit" size={15} color={colors.main.primary} />
                <S.LabelDate>{translateDate(state.harvestDate)}</S.LabelDate>
              </S.DatePickerContent>
            </S.PickerContainer>

            <S.StockAndPrice>
              <S.InputContainer>
                <S.Label>Estoque:</S.Label>

                <S.StockContainer>
                  <S.InputStock
                    value={state.stock}
                    onChangeText={(value) => handleInputStock(value)}
                    keyboardType="number-pad"
                  />
                </S.StockContainer>
              </S.InputContainer>

              <S.InputContainer>
                <S.Label>Preço:</S.Label>

                <S.PriceContainer>
                  <Feather name="edit" size={15} color={colors.basic.white} />
                  <S.InputPrice
                    value={state.price}
                    onChangeText={(value) => handleInputPrice(value)}
                    selectionColor={colors.basic.white}
                    keyboardType="number-pad"
                  />
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
