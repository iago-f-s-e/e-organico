import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Animated } from 'react-native';
import { hideToast, useAppDispatch, useAppSelector } from '@src/store';
import { colors } from '@src/config/theme';
import { getIcon } from './helpers';

import * as S from './styles';

export const Toast = (): JSX.Element => {
  const { toast } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [translate] = useState(new Animated.ValueXY({ x: 0, y: -200 }));

  const handleHideToast = () => dispatch(hideToast());

  const handleOnOpen = () => {
    Animated.parallel([
      Animated.timing(translate.y, {
        toValue: 30,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();

    setTimeout(handleHideToast, 3000);
  };

  const handleOnClose = () => {
    Animated.parallel([
      Animated.timing(translate.y, {
        toValue: -200,
        duration: 600,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleToast = useCallback(() => {
    if (!toast.visible) return handleOnClose();

    return handleOnOpen();
  }, [toast.visible]); // eslint-disable-line

  const icon = useMemo(() => getIcon(toast.type), [toast.type]);

  const message = useMemo(() => toast.message, [toast.message]);

  const color = useMemo(() => {
    if (toast.type === 'error') return colors.actions.error;

    return colors.actions.info;
  }, [toast.type]);

  useEffect(() => {
    handleToast();
  }, [handleToast]);

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        transform: [{ translateY: translate.y }],
        backgroundColor: color,
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 24,
        padding: 20,
        elevation: 10,
        zIndex: 1,
      }}
    >
      {icon}
      <S.Message>{message}</S.Message>
    </Animated.View>
  );
};
