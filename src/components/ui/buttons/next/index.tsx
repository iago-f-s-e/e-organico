import React, { useMemo } from 'react';
import { colors } from '@src/config/theme';
import { IfElse } from '@src/components/business';
import { Loading } from '../../loading';

import * as S from './styles';
import { Props } from './types';

// TODO: bloquear o botão e mostrar que está em loading

export const NextButton = ({ handle, loading }: Props): JSX.Element => {
  const opacity = useMemo(() => {
    if (loading) return { opacity: 0.5 };

    return { opacity: 1 };
  }, [loading]);

  const disabled = useMemo(() => loading, [loading]);

  return (
    <S.Container onPress={handle} disabled={disabled} style={opacity}>
      <IfElse
        condition={loading}
        render={{
          toBeTruthy: () => <Loading color={colors.basic.white} sizeType="large" />,
          toBeFalsy: () => <S.Label>Próximo</S.Label>,
        }}
      />
    </S.Container>
  );
};
