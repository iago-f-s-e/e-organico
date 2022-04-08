import React, { FC, useReducer } from 'react';
import { FlatList } from 'react-native';
import { Product } from '@src/store/slices/product/types';

import * as C from '@src/components';
import { ListSignUpProduct } from '@src/components/ui/list/sign-up-product';
import { SignUpProductPayload } from '@src/store/slices/sign-up-product/types';
import { addSignUpProduct, removeSignUpProduct, useAppDispatch } from '@src/store';
import * as C_S from '../common-styles';

import { initialState, reducer } from './reducer';

const products: Product[] = [
  { id: 'produto1', name: 'maçã', unitMeasures: [{ name: 'Un' }] },
  { id: 'produto2', name: 'goiaba', unitMeasures: [{ name: 'Un' }, { name: 'duzia' }] },
  { id: 'produto3', name: 'goiaba', unitMeasures: [{ name: 'Un' }, { name: 'duzia' }] },
];

export const InitialProduct: FC = () => {
  const appDispatch = useAppDispatch();

  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenAnimation = () => dispatch({ type: 'onOpenAnimation' });
  const onCloseAnimation = () => dispatch({ type: 'onCloseAnimation' });

  const handleSelect = (payload: SignUpProductPayload) => {
    appDispatch(addSignUpProduct(payload));
  };

  const handleRemove = (payload: SignUpProductPayload) => {
    appDispatch(removeSignUpProduct(payload));
  };

  return (
    <C_S.Container>
      <C.Header handle={() => []} title="Seleção de produtos" iconType="navigate-go-back" />
      <C_S.Container>
        <FlatList
          style={{ paddingVertical: 8, paddingHorizontal: 16 }}
          data={products}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListSignUpProduct
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
          handle={() => {}}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
