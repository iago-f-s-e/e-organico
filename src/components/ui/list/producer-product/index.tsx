import React from 'react';

import { handleInputMask, translateUnitMeasure } from '@src/utils';
import { ProductDetail } from '@src/store/slices/product/types';
import { useAppNavigation } from '@src/hooks';
import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  data: ProductDetail;
};

export const ListProducerProduct = ({ data }: Props): JSX.Element => {
  const { navigateTo } = useAppNavigation();

  const price = handleInputMask(data.price, 'money', {
    onlyComma: true,
  });

  const translated = translateUnitMeasure(data.unitMeasure);
  const unitMeasure = Number(data.stock) > 1 ? `${translated}s` : translated;

  const stock = `${data.stock} ${unitMeasure}`;

  return (
    <C_S.Container>
      <C_S.ImageContainer>
        <C_S.Image source={{ uri: data.product.image }} />
      </C_S.ImageContainer>
      <C_S.Content onPress={() => navigateTo<'producer'>('producer-product')}>
        <C_S.Title>{data.product.name}</C_S.Title>
        <S.ValuesContent>
          <S.ValuesContent>
            <S.Stock>{stock}</S.Stock>
          </S.ValuesContent>

          <S.Total>{price}</S.Total>
        </S.ValuesContent>
      </C_S.Content>
    </C_S.Container>
  );
};
