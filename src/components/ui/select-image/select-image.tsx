import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { colorSystem } from '@src/styles';
import * as S from './styles';
import { Props } from './types';

export const SelectImage = ({ onSelect }: Props): JSX.Element => {
  return (
    <S.Container onPress={onSelect}>
      <S.Label>Selecionar foto</S.Label>
      <AntDesign name="cloudupload" size={24} color={colorSystem.basic.white} />
    </S.Container>
  );
};
