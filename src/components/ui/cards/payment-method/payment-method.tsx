import React from 'react';

import { Payment } from '@src/store/slices/payment-method/types';
import * as C_S from '../common-styles';

type Props = {
  payment: Payment;
};

export const PaymentMethodCard = ({ payment }: Props): JSX.Element => {
  return (
    <C_S.SmallContainerWithoutShadow>
      <C_S.SmallInfoContainer>
        <C_S.SmallInfoContent>
          <C_S.Name>{payment.name}</C_S.Name>
        </C_S.SmallInfoContent>
      </C_S.SmallInfoContainer>
    </C_S.SmallContainerWithoutShadow>
  );
};
