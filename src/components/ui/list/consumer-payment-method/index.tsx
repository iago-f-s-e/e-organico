import React from 'react';

import { useAppNavigation } from '@src/hooks';
import { If } from '@src/components/business';
import { colors } from '@src/config/theme';
import { PaymentMethod } from '@src/store/slices/payment-method/types';
import * as C_S from '../common-styles';
import { Selected } from '../../selected';

type Props = {
  paymentMethod: PaymentMethod;
  current: PaymentMethod;
  selected: PaymentMethod;
  onSelect: (paymentMethod: PaymentMethod) => void;
};

export const ListConsumerPaymentMethod = ({
  paymentMethod,
  onSelect,
  current,
  selected,
}: Props): JSX.Element => {
  const { goBack } = useAppNavigation();

  const isSelected = selected && selected.id === paymentMethod.id;

  const isCurrent = current && current.id === paymentMethod.id;

  const borderCurrent = {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.main.primary,
  };

  const handlePress = () => {
    if (onSelect) return onSelect(paymentMethod);

    return goBack();
  };

  return (
    <C_S.ShadowContainer style={isCurrent ? borderCurrent : undefined}>
      <C_S.Content onPress={handlePress}>
        <C_S.Title>{paymentMethod.name}</C_S.Title>

        <If condition={isSelected} render={() => <Selected />} />
      </C_S.Content>
    </C_S.ShadowContainer>
  );
};
