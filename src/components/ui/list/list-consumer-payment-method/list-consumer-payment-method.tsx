import React from 'react';

import { useAppNavigation } from '@src/hooks';
import { If } from '@src/components/business';
import { colorSystem } from '@src/styles';
import { Payment } from '@src/store/slices/payment-method/types';
import * as C_S from '../common-styles';
import { Selected } from '../../selected/selected';

type Props = {
  payment: Payment;
  current: Payment;
  selected: Payment;
  onSelect: (payment: Payment) => void;
};

export const ListConsumerPaymentMethod = ({
  payment,
  onSelect,
  current,
  selected,
}: Props): JSX.Element => {
  const { goBack } = useAppNavigation();

  const isSelected = selected && selected.id === payment.id;

  const isCurrent = current && current.id === payment.id;

  const borderCurrent = {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colorSystem.main.primary,
  };

  const handlePress = () => {
    if (onSelect) return onSelect(payment);

    return goBack();
  };

  return (
    <C_S.ShadowContainer style={isCurrent ? borderCurrent : undefined}>
      <C_S.Content onPress={handlePress}>
        <C_S.Title>{payment.name}</C_S.Title>

        <If condition={isSelected} render={() => <Selected />} />
      </C_S.Content>
    </C_S.ShadowContainer>
  );
};
