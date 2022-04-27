import React from 'react';

import { PaymentMethod } from '@src/store/slices/payment-method/types';
import * as C_S from '../common-styles';

type Props = {
  paymentMethod: PaymentMethod;
};

export const PaymentMethodCard = ({ paymentMethod }: Props): JSX.Element => {
  return (
    <C_S.SmallContainer>
      <C_S.SmallInfoContainer>
        <C_S.SmallInfoContent>
          <C_S.Name>{paymentMethod.name}</C_S.Name>
        </C_S.SmallInfoContent>
      </C_S.SmallInfoContainer>
    </C_S.SmallContainer>
  );
};
