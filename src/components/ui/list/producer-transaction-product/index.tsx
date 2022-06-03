import React from 'react';

import { handleInputMask, translateUnitMeasure } from '@src/utils';
import { TransactionProduct } from '@src/store/slices/transaction/types';
import * as C_S from '../common-styles';
import * as S from './styles';

type Props = {
  transactionProduct: TransactionProduct;
};

export const ListProducerTransactionProduct = ({ transactionProduct }: Props): JSX.Element => {
  const price = handleInputMask(transactionProduct.producerProduct.price, 'money', {
    onlyComma: true,
  });

  const total = handleInputMask(transactionProduct.total, 'money', {
    onlyComma: true,
  });
  const translated = translateUnitMeasure(transactionProduct.producerProduct.unitMeasure);
  const unitMeasure = Number(transactionProduct.quantity) > 1 ? `${translated}s` : translated;

  const quantity = `x ${transactionProduct.quantity} ${unitMeasure}`;

  return (
    <S.Container>
      <C_S.ImageContainer>
        <C_S.Image source={{ uri: transactionProduct.producerProduct.product.imagePath }} />
      </C_S.ImageContainer>
      <C_S.Content onPress={() => {}}>
        <C_S.Title>{transactionProduct.producerProduct.product.name}</C_S.Title>
        <S.ValuesContent>
          <S.ValuesContent>
            <S.Price>{price}</S.Price>
            <S.Quantity>{quantity}</S.Quantity>
          </S.ValuesContent>

          <S.Total>{total}</S.Total>
        </S.ValuesContent>
      </C_S.Content>
    </S.Container>
  );
};