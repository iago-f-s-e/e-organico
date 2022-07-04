import React, { FC, useReducer, useMemo, useCallback } from 'react';
import * as ImagePicker from 'expo-image-picker';

import defaultImage from '@src/assets/images/default-picker-image.png';

import * as C from '@src/components';
import { changeSignUpProducer, useAppDispatch, useAppSelector } from '@src/store';
import { useAppNavigation, useToast as _useToast } from '@src/hooks';
import * as C_S from '../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

type PickerResults = {
  cancelled: boolean;
  uri: string;
  base64: string;
  height: number;
  width: number;
  type: ImagePicker.MediaTypeOptions;
};

export const PropertyImages: FC = () => {
  const appDispatch = useAppDispatch();
  const { signUpConsumer, signUpProducer } = useAppSelector((state) => state);
  const useToast = _useToast();
  const { navigateTo } = useAppNavigation();

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    images: [...signUpProducer.propertyImages],
  });

  const images = useMemo(() => {
    const imagesQuantity = 4;

    return new Array(imagesQuantity).fill('').map((_, index) => {
      const hasImage = state.images[index];

      if (hasImage && !!hasImage.uri.length) return { uri: hasImage.uri };

      return defaultImage;
    });
  }, [state]);

  const handlePickerImage = async (index: 0 | 1 | 2 | 3) => {
    const result = (await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: false,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
    })) as PickerResults;

    if (result.cancelled) return;

    const image = { uri: result.uri, base64: result.base64 };

    dispatch({ type: 'changeImages', payload: { index, image } });
  };

  const handleNext = useCallback(() => {
    const images = state.images.filter((image) => !!image);

    if (images.length !== 4) {
      return useToast.error('Todas as imagens são obrigatórias!');
    }

    appDispatch(
      changeSignUpProducer({
        ...signUpProducer,
        ...signUpConsumer,
        userType: 'producer',
        propertyImages: [...images],
      }),
    );

    return navigateTo<'auth'>('sign-up-select-types');
  }, [appDispatch, useToast, state, signUpProducer, signUpConsumer, navigateTo]);

  return (
    <C_S.Container>
      <C.Header title="Propriedade" iconType="navigate-go-back" />
      <C_S.Container>
        <S.PropertyImagesContainer>
          <S.Title>Envie fotos da sua propriedade</S.Title>
          <S.ImagesContainer>
            <S.ImageContainer>
              <S.SelectImage onPress={() => handlePickerImage(0)}>
                <S.ImageContent resizeMode="stretch" source={images[0]} />
              </S.SelectImage>
            </S.ImageContainer>

            <S.ImageContainer>
              <S.SelectImage onPress={() => handlePickerImage(1)}>
                <S.ImageContent resizeMode="stretch" source={images[1]} />
              </S.SelectImage>
            </S.ImageContainer>
          </S.ImagesContainer>

          <S.ImagesContainer>
            <S.ImageContainer>
              <S.SelectImage onPress={() => handlePickerImage(2)}>
                <S.ImageContent resizeMode="stretch" source={images[2]} />
              </S.SelectImage>
            </S.ImageContainer>

            <S.ImageContainer>
              <S.SelectImage onPress={() => handlePickerImage(3)}>
                <S.ImageContent resizeMode="stretch" source={images[3]} />
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
