import React, { FC, useReducer } from 'react';

import defaultImage from '@src/assets/images/default-picker-image.png';

import * as C from '@src/components';
import * as C_S from '../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

// TODO: colocar detalhes das fotos
// TODO: selecionar imagens
// TODO: liberar next somente depois das 4 imagens
// TODO: verificar tamanho das imagens
// TODO: navegar para select de certificação

export const PropertyImages: FC = () => {
  const [state, _] = useReducer(reducer, initialState);

  const handleNext = () => {};
  return (
    <C_S.Container>
      <C.Header
        handle={() => {
          // TODO: navigation.goBack()
        }}
        iconType="navigate-go-back"
      />
      <C_S.Container>
        <S.PropertyImagesContainer>
          <S.Title>Envie fotos da sua propriedade</S.Title>
          <S.ImagesContainer>
            <S.ImageContainer>
              <S.SelectImage>
                <S.ImageContent resizeMode="stretch" source={defaultImage} />
              </S.SelectImage>
            </S.ImageContainer>

            <S.ImageContainer>
              <S.SelectImage>
                <S.ImageContent resizeMode="stretch" source={defaultImage} />
              </S.SelectImage>
            </S.ImageContainer>
          </S.ImagesContainer>

          <S.ImagesContainer>
            <S.ImageContainer>
              <S.SelectImage>
                <S.ImageContent resizeMode="stretch" source={defaultImage} />
              </S.SelectImage>
            </S.ImageContainer>

            <S.ImageContainer>
              <S.SelectImage>
                <S.ImageContent resizeMode="stretch" source={defaultImage} />
              </S.SelectImage>
            </S.ImageContainer>
          </S.ImagesContainer>
        </S.PropertyImagesContainer>

        <C.NextButton
          handle={handleNext}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
