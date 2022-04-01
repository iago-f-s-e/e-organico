import React, { FC } from 'react';

import * as C from '@src/components';
import * as C_S from '../common-styles';

export const Credentials: FC = () => {
  return (
    <C_S.Container>
      <C.Header
        handle={() => {
          // TODO: navigation.goBack()
        }}
        iconType="navigate-go-back"
      />
    </C_S.Container>
  );
};
