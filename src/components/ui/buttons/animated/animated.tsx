import React, { useMemo } from 'react';
import { Animated } from 'react-native';
import { colors } from '@src/config/theme';
import { IfElse } from '@src/components/business';
import { Loading } from '../../loading/loading';

import * as S from './styles';
import { Props } from './types';

// TODO: bloquear o botão e mostrar que está em loading

export const AnimatedButton = ({ handle, loading, animated, label }: Props): JSX.Element => {
  const opacity = useMemo(() => {
    if (loading) return { opacity: 0.5 };

    return { opacity: 1 };
  }, [loading]);

  const disabled = useMemo(() => loading, [loading]);

  const showLabel = label || 'Próximo';

  return (
    <Animated.View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: animated.height,
        opacity: animated.opacity,
        marginBottom: 10,
      }}
    >
      <S.Container onPress={handle} disabled={disabled} style={opacity}>
        <IfElse
          condition={loading}
          render={{
            toBeTruthy: () => <Loading color={colors.basic.white} sizeType="large" />,
            toBeFalsy: () => <S.Label>{showLabel}</S.Label>,
          }}
        />
      </S.Container>
    </Animated.View>
  );
};
