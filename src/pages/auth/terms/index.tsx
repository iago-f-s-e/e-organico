import React, { FC, useState } from 'react';
import { colors, dimensions } from '@src/config/theme';
import { WebView } from 'react-native-webview';

import * as C from '@src/components';
import * as S from './styles';

const top = dimensions.screen.height * 0.45;
const left = dimensions.screen.width * 0.45;

// TODO: navegar para cadastro

export const Terms: FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <S.Container>
      <C.Header
        handle={() => {
          // TODO: navigation.goBack()
        }}
        iconType="navigate-go-back"
      />
      <WebView
        onLoad={() => setLoaded(true)}
        source={{ uri: 'https://eorganico-termo-de-uso.vercel.app/' }}
      />

      <C.IfElse
        condition={loaded}
        render={{
          toBeFalsy: () => (
            <C.Loading
              sizeType="large"
              color={colors.main.primary}
              style={{ position: 'absolute', top, left }}
            />
          ),
          toBeTruthy: () => (
            <C.FooterButton
              label="Aceitar"
              handle={() => {
                // TODO: navegar para cadastro
              }}
            />
          ),
        }}
      />
    </S.Container>
  );
};
