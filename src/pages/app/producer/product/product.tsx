import React, { FC, useEffect, useReducer } from 'react';
import { Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useApi, useAppNavigation } from '@src/hooks';
import { hideBottomTab, useAppDispatch } from '@src/store';
import { handleInputMask, translateDate } from '@src/utils';
import { colorSystem, shadowSystem } from '@src/styles';

import * as C from '@src/components';
import { ProducerProductDetail } from '@src/store/slices/producer-product/type';
import * as C_S from '../../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

export const Product: FC = () => {
  const appDispatch = useAppDispatch();
  const { onFocus, goBack, getIdParams } = useAppNavigation();
  const { getProducerProductById, updateProducerProduct, inactiveProducerProduct } = useApi();

  const [state, dispatch] = useReducer(reducer, { ...initialState, idParam: getIdParams() });

  const onCloseButton = () => dispatch({ type: 'closeButton' });
  const onChangeProducerProduct = (payload: ProducerProductDetail) =>
    dispatch({ type: 'onChangeProducerProduct', payload });
  const onChangeShowDatePick = (payload: boolean) =>
    dispatch({ type: 'onChangeShowDatePick', payload });

  const handleOnFocus = () => {
    dispatch({ type: 'onInputFocus' });

    if (!state.isDifferent) return;

    onCloseButton();
  };

  const handleOnBlur = () => {
    dispatch({ type: 'onInputBlur' });

    if (!state.isDifferent) return;

    dispatch({ type: 'openButton' });
  };

  const openOrCloseButtonOnDatePicker = (date: Date) => {
    const originalDate = translateDate(state.producerProduct.harvestDate);
    const toChange = translateDate(date);

    const dateIsDifferent = originalDate !== toChange;

    if (dateIsDifferent) return dispatch({ type: 'openButton' });

    return dispatch({ type: 'closeButton' });
  };

  const handleInputPrice = (price: string) => {
    dispatch({
      type: 'onChangePrice',
      payload: handleInputMask(price, 'money', { withComma: true }),
    });
  };

  const handlePickDate = (date: Date) => {
    openOrCloseButtonOnDatePicker(date);

    dispatch({ type: 'onChangeHarvestDate', payload: date });
  };

  const handleInputStock = (stock: string) => {
    const _stock = Number(stock);
    const isInvalid = Number.isNaN(_stock) || _stock < 0;

    if (isInvalid) return;

    dispatch({ type: 'onChangeStock', payload: stock });
  };

  const handleOpenRequisition = () => {
    getProducerProductById(state.idParam)
      .then((producerProduct) => onChangeProducerProduct(producerProduct))
      .finally(() => dispatch({ type: 'changeLoading', payload: false }));
  };

  const handleUpdate = () => {
    dispatch({ type: 'changeUpdate', payload: true });

    updateProducerProduct({
      ...state.producerProduct,
      harvestDate: state.harvestDate,
      price: state.price,
      stock: state.stock,
    })
      .then(() => {
        onCloseButton();
        setTimeout(() => goBack(), 300);
      })
      .finally(() => dispatch({ type: 'changeUpdate', payload: false }));
  };

  const handleCancel = () => {
    onChangeProducerProduct(state.producerProduct);
    onCloseButton();
  };

  const handleInactive = () => {
    dispatch({ type: 'changeInactive', payload: true });

    inactiveProducerProduct(state.idParam)
      .then(() => goBack())
      .finally(() => dispatch({ type: 'changeInactive', payload: false }));
  };

  const handleOnMount = () => {
    appDispatch(hideBottomTab());
    handleOpenRequisition();
  };

  useEffect(() => {
    const focus = onFocus(handleOnMount);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Produto" />

      <C.IfElse
        condition={state.loading}
        render={{
          toBeTruthy: () => <C.Loading color={colorSystem.main.primary} sizeType="large" />,
          toBeFalsy: () => (
            <>
              <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
                <C_S.Content>
                  <Animated.View
                    style={{
                      ...shadowSystem,
                      width: state.imageSize.x,
                      height: state.imageSize.y,
                      overflow: 'hidden',
                      borderRadius: 5,
                      backgroundColor: colorSystem.basic.white,
                    }}
                  >
                    <S.Image source={{ uri: state.producerProduct.image }} />
                  </Animated.View>
                </C_S.Content>

                <C_S.Content>
                  <S.Name>{state.producerProduct.name}</S.Name>
                  <S.Content>
                    <S.PickerContainer>
                      <S.Label>Data de colheita: </S.Label>
                      <S.DatePickerContent onPress={() => onChangeShowDatePick(true)}>
                        <C.DatePicker
                          show={state.showDatePicker}
                          hide={() => onChangeShowDatePick(false)}
                          value={state.harvestDate}
                          select={(value) => handlePickDate(value)}
                        />
                        <Feather name="edit" size={15} color={colorSystem.main.primary} />
                        <S.LabelDate>{translateDate(state.harvestDate)}</S.LabelDate>
                      </S.DatePickerContent>
                    </S.PickerContainer>

                    <S.StockAndPrice>
                      <S.InputContainer>
                        <S.Label>{`Estoque: (${state.producerProduct.unitMeasure.name})`}</S.Label>

                        <S.StockContainer>
                          <S.InputStock
                            value={state.stock}
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
                          <Feather name="edit" size={15} color={colorSystem.basic.white} />
                          <S.InputPrice
                            value={state.price}
                            onChangeText={(value) => handleInputPrice(value)}
                            selectionColor={colorSystem.basic.white}
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

              <S.Buttons>
                <Animated.View
                  style={{
                    width: state.sizeConfirmButton.x,
                    height: state.sizeConfirmButton.y,
                    opacity: state.opacityButton.x,
                  }}
                >
                  <C_S.ButtonConfirm disabled={state.updating} onPress={handleUpdate}>
                    <C.IfElse
                      condition={state.updating}
                      render={{
                        toBeFalsy: () => <C_S.ButtonLabel>Atualizar</C_S.ButtonLabel>,
                        toBeTruthy: () => (
                          <C.Loading color={colorSystem.basic.white} sizeType="large" />
                        ),
                      }}
                    />
                  </C_S.ButtonConfirm>
                </Animated.View>

                <Animated.View
                  style={{
                    width: state.sizeCancelButton.x,
                    height: state.sizeCancelButton.y,
                    opacity: state.opacityButton.y,
                  }}
                >
                  <C.IfElse
                    condition={state.isDifferent}
                    render={{
                      toBeFalsy: () => (
                        <C_S.ButtonCancel disabled={state.inactivating} onPress={handleInactive}>
                          <C.IfElse
                            condition={state.inactivating}
                            render={{
                              toBeFalsy: () => <C_S.ButtonLabel>Excluir</C_S.ButtonLabel>,
                              toBeTruthy: () => (
                                <C.Loading color={colorSystem.basic.white} sizeType="large" />
                              ),
                            }}
                          />
                        </C_S.ButtonCancel>
                      ),
                      toBeTruthy: () => (
                        <C_S.ButtonCancel disabled={state.updating} onPress={handleCancel}>
                          <C_S.ButtonLabel>Cancelar</C_S.ButtonLabel>
                        </C_S.ButtonCancel>
                      ),
                    }}
                  />
                </Animated.View>
              </S.Buttons>
            </>
          ),
        }}
      />
    </C_S.Container>
  );
};
