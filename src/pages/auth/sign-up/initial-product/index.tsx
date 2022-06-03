import React, { FC, useEffect, useReducer } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Product, ProductDetail } from '@src/store/slices/product/types';

import * as C from '@src/components';
import { addSignUpProduct, removeSignUpProduct, useAppDispatch, useAppSelector } from '@src/store';
import { useAppNavigation, useStorage, useToast as _useToast } from '@src/hooks';
import { useApi } from '@src/hooks/use-api';
import * as C_S from '../common-styles';

import { initialState, reducer } from './reducer';

export const InitialProduct: FC = () => {
  const appDispatch = useAppDispatch();
  const { navigateTo, goBack, onFocus } = useAppNavigation();
  const { clearPersist } = useStorage();
  const { signUpProduct } = useAppSelector((state) => state);

  const { getAllProducts } = useApi();
  const useToast = _useToast();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenAnimation = () => dispatch({ type: 'onOpenAnimation' });
  const onCloseAnimation = () => dispatch({ type: 'onCloseAnimation' });
  const onGetAllProducts = () => dispatch({ type: 'changeLoading', payload: true });
  const onConcludedGetAllProducts = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeProducts = (products: Product[]) =>
    dispatch({ type: 'onChangeProducts', payload: products });

  const handleSelect = (payload: ProductDetail) => {
    appDispatch(addSignUpProduct(payload));
  };

  const handleRemove = (payload: ProductDetail) => {
    appDispatch(removeSignUpProduct(payload));
  };

  const handleNext = () => {
    if (!signUpProduct.length) return useToast.error('Selecione pelo menos uma feira!');

    clearPersist();

    return navigateTo<'auth'>('sign-up-finished');
  };

  const handleGetAllProducts = () => {
    onGetAllProducts();

    getAllProducts()
      .then((products) => onChangeProducts(products))
      .finally(() => onConcludedGetAllProducts());
  };

  useEffect(() => {
    const focus = onFocus(handleGetAllProducts);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header handle={goBack} title="Seleção de produtos" iconType="navigate-go-back" />
      <C_S.Container>
        <FlatList
          style={{ paddingVertical: 8, paddingHorizontal: 16 }}
          refreshControl={
            <RefreshControl onRefresh={handleGetAllProducts} refreshing={state.loading} />
          }
          data={state.products}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <C.ListSignUpProduct
              unitMeasures={[]} // TODO: buscar da api
              product={item}
              actions={{
                remove: handleRemove,
                select: handleSelect,
                onCloseAnimation,
                onOpenAnimation,
              }}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />

        <C.NextButton
          handle={handleNext}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
