import React, { useMemo } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '@src/config/theme';
import { User } from '@src/store/slices/user/types';
import { useAppNavigation } from '@src/hooks';
import { canChangeCart, updateSection, useAppDispatch, useAppSelector } from '@src/store';

import * as S from './styles';
import * as C_S from '../common-styles';

type Props = {
  producer: User;
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
    if (!cart.current) return true;

    return cart.current.producerId === producer.id;
  }, [cart, producer]);

  const handleNavigate = () => {
    dispatch(updateSection({ producerId: producer.id }));
    dispatch(canChangeCart(changeCart));

    return navigateTo<'consumer'>('consumer-producer');
  };

  return (
    <S.Container>
      <C_S.ImageContainer>
        <C_S.Image source={{ uri: producer.imagePath }} />
      </C_S.ImageContainer>

      <S.Content onPress={handleNavigate}>
        <S.Title>{producer.name}</S.Title>

        <S.InfoContainer>
          <S.Info>{infoRanting}</S.Info>
          <S.Info>{infoSales}</S.Info>
        </S.InfoContainer>
      </S.Content>

      <S.Like>
        <AntDesign name="heart" size={24} color={colors.entity.heart} />
      </S.Like>
    </S.Container>
  );
};
