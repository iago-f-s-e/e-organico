import React from 'react';
import {} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '@src/config/theme';
import { User } from '@src/store/slices/user/types';
import { useAppNavigation } from '@src/hooks';
import * as S from './styles';

type Props = {
  producer: User;
};

export const ListConsumerProducer = ({ producer }: Props): JSX.Element => {
  const { navigateTo } = useAppNavigation();
  const { rating, transactions } = producer.score;

  // TODO: criar condicional showScore = !!transactions;

  const infoRanting = `Avaliação: ${rating}`;
  const infoSales = `Vendas: ${transactions}`;

  const handleNavigate = () => {
    return navigateTo<'consumer'>('consumer-producer');
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image source={{ uri: producer.imagePath }} />
      </S.ImageContainer>

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
