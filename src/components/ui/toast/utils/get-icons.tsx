import React from 'react';
import { ToastType } from '@src/store/slices/toast/types';

import { Feather } from '@expo/vector-icons';
import { colorSystem } from '@src/styles';

const icons: { [key in ToastType]: JSX.Element } = {
  error: <Feather name="x-octagon" size={24} color={colorSystem.basic.white} />,
  info: <Feather name="info" size={24} color={colorSystem.basic.white} />,
  success: <Feather name="check" size={24} color={colorSystem.basic.white} />,
};

type GetIcon = (type: ToastType) => JSX.Element;

export const getIcon: GetIcon = (type) => icons[type];
