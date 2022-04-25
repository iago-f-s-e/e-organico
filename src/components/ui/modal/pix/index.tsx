import React from 'react';
import { Feather } from '@expo/vector-icons';

import pixIcon from './assets/pix.png';
import * as S from './styles';

type Props = {
  visible: boolean;
};

export const ModalPix = ({ visible }: Props): JSX.Element => {
  return (
    <S.Main>
      <S.Container visible={visible}>
        <S.Content>
          <S.Header>
            <S.HeaderTitle>Pagamento</S.HeaderTitle>
          </S.Header>
          <S.LogoContainer>
            <S.LogoContent source={pixIcon} />
          </S.LogoContainer>

          <S.Section>
            <S.InfoContainer>
              <S.InfoTitle>Pedido aguardando pagamento</S.InfoTitle>
              <S.InfoDescription>Copie o código abaixo para realizar o pagamento</S.InfoDescription>

              <S.CodeContainer>
                <S.Code numberOfLines={1}>
                  kajkdjakdjaicokzlckzlcoakdmadnmakjdakmdkamdkmadkmadmakdmkamdkamkdmak
                </S.Code>

                <Feather name="copy" size={24} color="black" />
              </S.CodeContainer>
            </S.InfoContainer>
          </S.Section>

          <S.CopyButton>
            <S.CopyLabel>Copiar</S.CopyLabel>
          </S.CopyButton>
        </S.Content>
      </S.Container>
    </S.Main>
  );
};
