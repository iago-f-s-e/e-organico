import React, { useMemo } from 'react';

import { useAppNavigation } from '@src/hooks';
import { canChangeCart, updateProducerSection, useAppDispatch, useAppSelector } from '@src/store';

import { MinimalProducer } from '@src/store/slices/producer/types';
import * as S from './styles';
import * as C_S from '../common-styles';

type Props = {
  producer: MinimalProducer;
};

export const ListConsumerProducer = ({ producer }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state);

  const { navigateTo } = useAppNavigation();
  const { rating, transactions } = producer.score;

  // TODO: criar condicional showScore = !!transactions;

  const infoRanting = `Avaliação: ${rating}`;
  const infoSales = `Vendas: ${transactions}`;

  const changeCart = useMemo(() => {
    if (!cart.hasCurrent) return true;

    return cart.current.producer.id === producer.id;
  }, [cart, producer]);

  const handleNavigate = () => {
    dispatch(updateProducerSection(producer));
    dispatch(canChangeCart(changeCart));

    return navigateTo<'consumer'>('consumer-producer', { id: producer.id });
  };

  return (
    <S.Container>
      <C_S.ImageContainer>
        <C_S.Image source={{ uri: producer.image }} />
      </C_S.ImageContainer>

      <S.Content onPress={handleNavigate}>
        <S.Title>{producer.name}</S.Title>

        <S.InfoContainer>
          <S.Info>{infoRanting}</S.Info>
          <S.Info>{infoSales}</S.Info>
        </S.InfoContainer>
      </S.Content>
    </S.Container>
  );
};
