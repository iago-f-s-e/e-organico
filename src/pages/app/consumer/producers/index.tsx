import React, { FC, useReducer, useEffect } from 'react';
import { FlatList } from 'react-native';

import * as C from '@src/components';

import { useAppNavigation } from '@src/hooks';
import { useApi } from '@src/hooks/use-api';
import { MinimalProducer } from '@src/store/slices/producer/types';
import { initialState, reducer } from './reducer';
import * as C_S from '../../common-styles';

export const Producers: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { onFocus } = useAppNavigation();
  const { getAllProducers } = useApi();

  const onOpenRequisition = () => dispatch({ type: 'changeLoading', payload: true });
  const onCloseRequisition = () => dispatch({ type: 'changeLoading', payload: false });
  const onChangeProducers = (producers: MinimalProducer[]) =>
    dispatch({ type: 'onChangeProducers', payload: producers });

  const handleOpenRequisition = () => {
    onOpenRequisition();

    getAllProducers()
      .then((producers) => onChangeProducers(producers))
      .finally(() => onCloseRequisition());
  };

  useEffect(() => {
    const focus = onFocus(handleOpenRequisition);

    return focus;
  }, []); // eslint-disable-line

  return (
    <C_S.ScrollContainer nestedScrollEnabled showsVerticalScrollIndicator={false}>
      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Últimos feirantes</C_S.Title>
          <C_S.ShowMore>ver mais</C_S.ShowMore>
        </C_S.TitleContainer>
        <FlatList
          data={state.lastProducers}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <C.ListConsumerProducer producer={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </C_S.Content>

      <C_S.Content>
        <C_S.TitleContainer>
          <C_S.Title>Todas os feirantes</C_S.Title>
          <C_S.ShowMore>ver mais</C_S.ShowMore>
        </C_S.TitleContainer>

        <C.Map
          data={state.producers}
          render={(value, index) => (
            <C.ListConsumerProducer key={index.toString()} producer={value} />
          )}
        />
      </C_S.Content>
    </C_S.ScrollContainer>
  );
};
