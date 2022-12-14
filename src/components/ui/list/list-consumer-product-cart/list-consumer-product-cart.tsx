import React from 'react';
import { ProductCartPayload } from '@src/store/slices/cart/types';

import { handleInputMask } from '@src/utils';
import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  productCart: ProductCartPayload;
};

export const ListConsumerProductCart = ({ productCart }: Props): JSX.Element => {
  const price = handleInputMask(productCart.producerProduct.price, 'money', { onlyComma: true });
  const { name } = productCart.producerProduct.unitMeasure;
  const unitMeasure = Number(productCart.quantity) > 1 ? `${name}s` : name;

  const quantity = `x ${productCart.quantity} ${unitMeasure}`;

  return (
    <C_S.Container>
      <C_S.ImageContainer />
      <C_S.Content onPress={() => {}}>
        <C_S.Title>{productCart.producerProduct.name}</C_S.Title>
        <S.ValuesContent>
          <S.ValuesContent>
            <S.Price>{price}</S.Price>
            <S.Quantity>{quantity}</S.Quantity>
          </S.ValuesContent>

          <S.Total>{productCart.total}</S.Total>
        </S.ValuesContent>
      </C_S.Content>
    </C_S.Container>
  );
};
