import React, { FC, useReducer } from 'react';
import { FlatList } from 'react-native';
import { Product } from '@src/store/slices/product/types';

import * as C from '@src/components';
import { SignUpProductPayload } from '@src/store/slices/sign-up-product/types';
import { addSignUpProduct, removeSignUpProduct, useAppDispatch, useAppSelector } from '@src/store';
import { useAppNavigation, useStorage, useToast as _useToast } from '@src/hooks';
import * as C_S from '../common-styles';

import { initialState, reducer } from './reducer';

// TODO: remover dados mocados
const products: Product[] = [
  { id: 'produto1', name: 'maçã', unitMeasures: [{ name: 'un' }] },
  { id: 'produto2', name: 'goiaba', unitMeasures: [{ name: 'un' }, { name: 'duzia' }] },
  { id: 'produto3', name: 'goiaba', unitMeasures: [{ name: 'un' }, { name: 'duzia' }] },
];

export const InitialProduct: FC = () => {
  const appDispatch = useAppDispatch();
  const { navigateTo, goBack } = useAppNavigation();
  const { clearPersist } = useStorage();
  const { signUpProduct } = useAppSelector((state) => state);

  const useToast = _useToast();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenAnimation = () => dispatch({ type: 'onOpenAnimation' });
  const onCloseAnimation = () => dispatch({ type: 'onCloseAnimation' });

  const handleSelect = (payload: SignUpProductPayload) => {
    appDispatch(addSignUpProduct(payload));
  };

  const handleRemove = (payload: SignUpProductPayload) => {
    appDispatch(removeSignUpProduct(payload));
  };

  const handleNext = () => {
    if (!signUpProduct.length) return useToast.error('Selecione pelo menos uma feira!');

    clearPersist();

    return navigateTo('sign-up-finished');
  };

  return (
    <C_S.Container>
      <C.Header handle={goBack} title="Seleção de produtos" iconType="navigate-go-back" />
      <C_S.Container>
        <FlatList
          style={{ paddingVertical: 8, paddingHorizontal: 16 }}
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <C.ListSignUpProduct
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
