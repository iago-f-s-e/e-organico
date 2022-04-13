import React from 'react';
import {} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '@src/config/theme';
import { User } from '@src/store/slices/user/types';
import * as S from './styles';

type Props = {
  producer: User;
};

export const ListConsumerProducer = ({ producer }: Props): JSX.Element => {
  const { rating, transactions } = producer.score;

  // TODO: criar condicional showScore = !!transactions;

  const infoRanting = `Avaliação: ${rating}`;
  const infoSales = `Vendas: ${transactions}`;

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image source={{ uri: producer.imagePath }} />
      </S.ImageContainer>

      <S.Content>
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
