import React from 'react';
import { ProducerProduct } from '@src/store/slices/product/types';

import { useAppNavigation } from '@src/hooks';

import { handleInputMask } from '@src/utils';
import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  data: ProducerProduct;
};

export const ListConsumerProduct = ({ data }: Props): JSX.Element => {
  const { product } = data;
  const price = handleInputMask(data.price, 'money', { onlyComma: true });
  const unitMeasure = `p/${data.unitMeasure.name}`;

  const { navigateTo } = useAppNavigation();

  const handleNavigate = () => {
    return navigateTo<'consumer'>('consumer-product', { id: product.id });
  };

  return (
    <C_S.Container>
      <C_S.ImageContainer>
        <C_S.Image source={{ uri: data.product.image }} />
      </C_S.ImageContainer>
      <C_S.Content onPress={handleNavigate}>
        <C_S.Title>{product.name}</C_S.Title>
        <S.PriceContainer>
          <S.Price>{price}</S.Price>
          <C_S.Info>{unitMeasure}</C_S.Info>
        </S.PriceContainer>
      </C_S.Content>
    </C_S.Container>
  );
};
