import React, { FC, useEffect, useReducer } from 'react';
import { FlatList } from 'react-native';

import { hideBottomTab, useAppDispatch } from '@src/store';
import { useAppNavigation, useApi } from '@src/hooks';
import { ProducerDetail } from '@src/store/slices/producer/types';
import { colorSystem } from '@src/styles';
import * as C from '@src/components';
import * as C_S from '../../common-styles';

import { initialState, reducer } from './reducer';

export const Producer: FC = () => {
  const appDispatch = useAppDispatch();
  const { onFocus, getIdParams } = useAppNavigation();
  const { getProducerById } = useApi();

  const [state, dispatch] = useReducer(reducer, { ...initialState, idParam: getIdParams() });

  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeProducer = (producer: ProducerDetail) =>
    dispatch({ type: 'onChangeProducer', payload: producer });

  const handleOpenRequisition = () => {
    getProducerById(state.idParam)
      .then((producer) => onChangeProducer(producer))
      .finally(() => onCloseRequisition());
  };

  const handleOnFocus = () => {
    appDispatch(hideBottomTab());
    handleOpenRequisition();
  };

  useEffect(() => {
    const focus = onFocus(handleOnFocus);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.Container>
      <C.Header title="Vendedor" />
      <C.IfElse
        condition={state.loading}
        render={{
          toBeTruthy: () => <C.Loading color={colorSystem.main.primary} sizeType="large" />,
          toBeFalsy: () => (
            <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
              <C_S.Content>
                <C.ProducerDetailCard producer={state.producer} />
              </C_S.Content>

              <C_S.Content>
                <C_S.TitleContainer>
                  <C_S.Title>Feiras</C_S.Title>
                </C_S.TitleContainer>

                <FlatList
                  data={state.producer.markets}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item }) => <C.ListConsumerMarket market={item} />}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </C_S.Content>
              <C_S.Content>
                <C_S.TitleContainer>
                  <C_S.Title>Produtos</C_S.Title>
                  <C_S.ShowMore>ver mais</C_S.ShowMore>
                </C_S.TitleContainer>

                <C.Map
                  data={state.producer.products}
                  render={(value, index) => (
                    <C.ListConsumerProduct key={index.toString()} data={value} />
                  )}
                />
              </C_S.Content>
            </C_S.ScrollContainer>
          ),
        }}
      />
    </C_S.Container>
  );
};
