import React, { FC, useReducer, useEffect } from 'react';
import { MinimalProducerProduct } from '@src/store/slices/producer-product/type';

import { useApi, useAppNavigation } from '@src/hooks';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

import { initialState, reducer } from './reducer';

export const Products: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { onFocus } = useAppNavigation();
  const { getOwnProducerProducts } = useApi();

  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeProducts = (payload: MinimalProducerProduct[]) =>
    dispatch({ type: 'onChangeProducts', payload });

  const handleOpenRequisition = () => {
    getOwnProducerProducts()
      .then((products) => onChangeProducts(products))
      .finally(() => onCloseRequisition());
  };

  useEffect(() => {
    const focus = onFocus(handleOpenRequisition);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C.If
        condition={!state.topTransactions.length}
        render={() => (
          <C_S.Content>
            <C_S.TitleContainer>
              <C_S.Title>Mais vendidos</C_S.Title>
            </C_S.TitleContainer>

            <C.ScrollHorizontal
              render={() => (
                <C.Map
                  data={state.topTransactions}
                  render={(value, index) => (
                    <C.ListProducerProduct key={index.toString()} data={value} />
                  )}
                />
              )}
            />
          </C_S.Content>
        )}
      />

      <C.If
        condition={!!state.lessTransactions.length}
        render={() => (
          <C_S.Content>
            <C_S.TitleContainer>
              <C_S.Title>Menos vendidos</C_S.Title>
            </C_S.TitleContainer>

            <C.ScrollHorizontal
              render={() => (
                <C.Map
                  data={state.lessTransactions}
                  render={(value, index) => (
                    <C.ListProducerProduct key={index.toString()} data={value} />
                  )}
                />
              )}
            />
          </C_S.Content>
        )}
      />

      <C.If
        condition={!state.lowStock.length}
        render={() => (
          <C_S.Content>
            <C_S.TitleContainer>
              <C_S.Title>Estoque baixo</C_S.Title>
            </C_S.TitleContainer>

            <C.ScrollHorizontal
              render={() => (
                <C.Map
                  data={state.lowStock}
                  render={(value, index) => (
                    <C.ListProducerProduct key={index.toString()} data={value} />
                  )}
                />
              )}
            />
          </C_S.Content>
        )}
      />

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Todos os produtos</C_S.Title>
        </C_S.TitleContainer>

        <C.Map
          data={state.products}
          render={(value, index) => <C.ListProducerProduct key={index.toString()} data={value} />}
        />
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
