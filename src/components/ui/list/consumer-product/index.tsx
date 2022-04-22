import React from 'react';
import { ProductDetail } from '@src/store/slices/product/types';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '@src/config/theme';
import { useAppNavigation } from '@src/hooks';

import { handleInputMask, translateUnitMeasure } from '@src/utils';
import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  data: ProductDetail;
};

export const ListConsumerProduct = ({ data }: Props): JSX.Element => {
  const { product } = data;
  const price = handleInputMask(data.price, 'money', { onlyComma: true });
  const unitMeasure = `p/${translateUnitMeasure(data.unitMeasure)}`;

  const { navigateTo } = useAppNavigation();

  const handleNavigate = () => {
    return navigateTo<'consumer'>('consumer-product', { id: product.id });
  };

  return (
    <C_S.Container>
      <C_S.ImageContainer>
        <C_S.Image source={{ uri: data.product.imagePath }} />
      </C_S.ImageContainer>
      <C_S.Content onPress={handleNavigate}>
        <C_S.Title>{product.name}</C_S.Title>
        <S.PriceContainer>
          <S.Price>{price}</S.Price>
          <C_S.Info>{unitMeasure}</C_S.Info>
        </S.PriceContainer>
      </C_S.Content>

      <C_S.Like>
        <AntDesign name="heart" size={24} color={colors.entity.heart} />
      </C_S.Like>
    </C_S.Container>
  );
};
