import React from 'react';
import { MinimalProducerProduct } from '@src/store/slices/producer-product/type';

import { useAppNavigation } from '@src/hooks';

import { handleInputMask } from '@src/utils';
import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  data: MinimalProducerProduct;
};

export const ListConsumerProduct = ({ data }: Props): JSX.Element => {
  const price = handleInputMask(data.price, 'money', { onlyComma: true });
  const unitMeasure = `p/${data.unitMeasure.name}`;

  const { navigateTo } = useAppNavigation();

  const handleNavigate = () => {
    return navigateTo<'consumer'>('consumer-product', { id: data.id });
  };

  return (
    <C_S.Container>
      <C_S.ImageContainer>
        <C_S.Image source={{ uri: data.name }} />
      </C_S.ImageContainer>
      <C_S.Content onPress={handleNavigate}>
        <C_S.Title>{data.name}</C_S.Title>
        <S.PriceContainer>
          <S.Price>{price}</S.Price>
          <C_S.Info>{unitMeasure}</C_S.Info>
        </S.PriceContainer>
      </C_S.Content>
    </C_S.Container>
  );
};
