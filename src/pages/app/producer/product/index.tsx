import React, { FC, useEffect, useReducer, useMemo, useState } from 'react';
import { Animated } from 'react-native';
import { ProducerProduct } from '@src/store/slices/product/types';
import { Feather } from '@expo/vector-icons';

import { useAppNavigation } from '@src/hooks';
import { hideBottomTab, useAppDispatch } from '@src/store';
import { handleInputMask, handleRemoveMask, translateDate } from '@src/utils';
import { colors } from '@src/config/theme';

import * as C from '@src/components';
import * as C_S from '../../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

// TODO: buscar da api
const producerProduct: ProducerProduct = null;

export const Product: FC = () => {
  const appDispatch = useAppDispatch();
  const { onFocus } = useAppNavigation();

  // TODO: atualizar pela requisição
  const [state, dispatch] = useReducer(reducer, { ...initialState, producerProduct });

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const dispatchOpenButton = () => dispatch({ type: 'openButton' });
  const dispatchCloseButton = () => dispatch({ type: 'closeButton' });
  const dispatchStock = (payload: string) => dispatch({ type: 'onChangeStock', payload });
  const dispatchPrice = (payload: string) => dispatch({ type: 'onChangePrice', payload });
  const dispatchHarvestDate = (payload: Date) => dispatch({ type: 'onChangeHarvestDate', payload });

  const isDifferent = useMemo(() => {
    const stockIsDifferent = producerProduct.stock !== state.producerProduct.stock;

    const priceIsDifferent =
      producerProduct.price !== handleRemoveMask(state.producerProduct.price, 'money');

    const originalDate = translateDate(producerProduct.harvestDate);
    const stateDate = translateDate(state.producerProduct.harvestDate);

    const dateIsDifferent = originalDate !== stateDate;

    return stockIsDifferent || priceIsDifferent || dateIsDifferent;
  }, [state.producerProduct.stock, state.producerProduct.price, state.producerProduct.harvestDate]);

  const handleOnFocus = () => {
    if (!isDifferent) return;

    dispatchCloseButton();
  };

  const handleOnBlur = () => {
    if (!isDifferent) return;

    dispatchOpenButton();
  };

  const openOrCloseButtonOnDatePicker = (date: Date) => {
    const originalDate = translateDate(producerProduct.harvestDate);
    const toChange = translateDate(date);

    const dateIsDifferent = originalDate !== toChange;

    if (dateIsDifferent) return dispatchOpenButton();

    return dispatchCloseButton();
  };

  const handleInputPrice = (price: string) => {
    dispatchPrice(handleInputMask(price, 'money', { withComma: true }));
  };

  const handlePickDate = (date: Date) => {
    openOrCloseButtonOnDatePicker(date);
    dispatchHarvestDate(date);
  };

  const handleInputStock = (stock: string) => {
    const _stock = Number(stock);
    const isInvalid = Number.isNaN(_stock) || _stock < 0;

    if (isInvalid) return;

    dispatchStock(stock);
  };

  useEffect(() => {
    const focus = onFocus(() => appDispatch(hideBottomTab()));

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Produto" />

      <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <C_S.Content>
          <S.ImageContainer>
            <S.Image source={{ uri: state.producerProduct.product.image }} />
          </S.ImageContainer>
        </C_S.Content>

        <C_S.Content>
          <S.Name>{state.producerProduct.product.name}</S.Name>
          <S.Content>
            <S.PickerContainer>
              <S.Label>Data de colheita: </S.Label>
              <S.DatePickerContent onPress={() => setShowDatePicker(true)}>
                <C.DatePicker
                  show={showDatePicker}
                  hide={() => setShowDatePicker(false)}
                  value={state.producerProduct.harvestDate}
                  select={(value) => handlePickDate(value)}
                />
                <Feather name="edit" size={15} color={colors.main.primary} />
                <S.LabelDate>{translateDate(state.producerProduct.harvestDate)}</S.LabelDate>
              </S.DatePickerContent>
            </S.PickerContainer>

            <S.StockAndPrice>
              <S.InputContainer>
                <S.Label>Estoque:</S.Label>

                <S.StockContainer>
                  <S.InputStock
                    value={state.producerProduct.stock}
                    onChangeText={(value) => handleInputStock(value)}
                    onBlur={handleOnBlur}
                    onFocus={handleOnFocus}
                    keyboardType="number-pad"
                  />
                </S.StockContainer>
              </S.InputContainer>

              <S.InputContainer>
                <S.Label>Preço:</S.Label>

                <S.PriceContainer>
                  <Feather name="edit" size={15} color={colors.basic.white} />
                  <S.InputPrice
                    value={state.producerProduct.price}
                    onChangeText={(value) => handleInputPrice(value)}
                    selectionColor={colors.basic.white}
                    onBlur={handleOnBlur}
                    onFocus={handleOnFocus}
                    keyboardType="number-pad"
                  />
                </S.PriceContainer>
              </S.InputContainer>
            </S.StockAndPrice>
          </S.Content>
        </C_S.Content>
      </C_S.ScrollContainer>

      <Animated.View
        style={{
          width: '100%',
          height: state.sizeButton.y,
          opacity: state.opacityButton.x,
        }}
      >
        <C_S.ButtonConfirm onPress={() => {}}>
          <C_S.ButtonLabel>Atualizar</C_S.ButtonLabel>
        </C_S.ButtonConfirm>
      </Animated.View>
    </C_S.Container>
  );
};
