import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '@root/config/theme';
import * as S from './styles';
import { Props } from './types';

export const SelectImage = ({ onSelect }: Props): JSX.Element => {
  return (
    <S.Container onPress={onSelect}>
      <S.Label>Selecionar foto</S.Label>
      <AntDesign name="cloudupload" size={24} color={colors.basic.white} />
    </S.Container>
  );
};
