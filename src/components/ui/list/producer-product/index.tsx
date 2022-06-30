import React from 'react';

import { handleInputMask } from '@src/utils';
import { MinimalProducerProduct } from '@src/store/slices/producer-product/type';
import { useAppNavigation } from '@src/hooks';
import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  data: MinimalProducerProduct;
};

export const ListProducerProduct = ({ data }: Props): JSX.Element => {
  const { navigateTo } = useAppNavigation();

  const price = handleInputMask(data.price, 'money', {
    onlyComma: true,
  });

  const { name } = data.unitMeasure;
  const unitMeasure = Number(data.stock) > 1 ? `${name}s` : name;

  const stock = `${data.stock} ${unitMeasure}`;

  return (
    <C_S.Container>
      <C_S.ImageContainer>
        <C_S.Image source={{ uri: data.image }} />
      </C_S.ImageContainer>
      <C_S.Content onPress={() => navigateTo<'producer'>('producer-product')}>
        <C_S.Title>{data.name}</C_S.Title>
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
