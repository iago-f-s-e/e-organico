import React, { FC, useEffect, useReducer } from 'react';
import { FlatList, RefreshControl, Animated } from 'react-native';

import * as C from '@src/components';
import {
  addSignUpProduct,
  clearSignUpProduct,
  hideBottomTab,
  removeSignUpProduct,
  useAppDispatch,
  useAppSelector,
} from '@src/store';
import { useAppNavigation, useToast as _useToast, useApi } from '@src/hooks';
import { UnitMeasure } from '@src/store/slices/unit-measure/types';
import { ProducerProduct } from '@src/store/slices/producer-product/type';
import { Product } from '@src/store/slices/product/types';
import * as C_S from '../../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

export const ManagementProducts: FC = () => {
  const appDispatch = useAppDispatch();
  const { onFocus, goBack } = useAppNavigation();
  const { signUpProduct } = useAppSelector((state) => state);
  const { getProductsWithoutProducerProduct, getAllUnitMeasures, postProducerProducts } = useApi();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenButton = () => dispatch({ type: 'onOpenButton' });
  const onCloseButton = () => dispatch({ type: 'onCloseButton' });
  const onOpenRequest = () => dispatch({ type: 'changeLoading', payload: true });
  const onCloseRequest = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeProducts = (products: Product[]) =>
    dispatch({ type: 'onChangeProducts', payload: products });
  const onChangeUnitMeasures = (unitMeasures: UnitMeasure[]) =>
    dispatch({ type: 'onChangeUnitMeasures', payload: unitMeasures });

  const handleSelect = (payload: ProducerProduct) => {
    appDispatch(addSignUpProduct(payload));
  };

  const handleRemove = (payload: ProducerProduct) => {
    appDispatch(removeSignUpProduct(payload));
  };

  const getAllData = async () => {
    onChangeProducts(await getProductsWithoutProducerProduct());
    onChangeUnitMeasures(await getAllUnitMeasures());
  };

  const handleGetAllData = () => {
    onOpenRequest();

    getAllData().finally(() => onCloseRequest());
  };

  const handleOnMount = async () => {
    appDispatch(hideBottomTab());
    handleGetAllData();
  };

  const handleConfirm = () => {
    onOpenRequest();

    postProducerProducts(signUpProduct)
      .then(({ error }) => {
        if (!error) return appDispatch(clearSignUpProduct());
      })
      .finally(() => handleGetAllData());
  };

  const handleCancel = () => {
    appDispatch(clearSignUpProduct());

    return goBack();
  };

  useEffect(() => {
    if (!signUpProduct.length) {
      onCloseButton();
      return;
    }

    onOpenButton();
  }, [signUpProduct]);

  useEffect(() => {
    const focus = onFocus(handleOnMount);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Seleção de produtos" iconType="navigate-go-back" />
      <C_S.Container>
        <FlatList
          style={{ paddingVertical: 8, paddingHorizontal: 16, marginBottom: 5 }}
          refreshControl={
            <RefreshControl onRefresh={handleGetAllData} refreshing={state.loading} />
          }
          data={state.products}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <C.ListSignUpProduct
              unitMeasures={state.unitMeasures}
              product={item}
              actions={{
                remove: handleRemove,
                select: handleSelect,
              }}
            />
          )}
          keyExtractor={(item, index) => item?.id ?? index.toString()}
        />

        <Animated.View
          style={{
            height: state.sizeButton.y,
            opacity: state.opacityButton.x,
          }}
        >
          <S.Buttons>
            <S.ButtonConfirm disabled={state.loading} onPress={handleConfirm}>
              <S.ButtonLabel>Confirmar</S.ButtonLabel>
            </S.ButtonConfirm>

            <S.ButtonCancel disabled={state.loading} onPress={handleCancel}>
              <S.ButtonLabel>Cancelar</S.ButtonLabel>
            </S.ButtonCancel>
          </S.Buttons>
        </Animated.View>
      </C_S.Container>
    </C_S.Container>
  );
};
