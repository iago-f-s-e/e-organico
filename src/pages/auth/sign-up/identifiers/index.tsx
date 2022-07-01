import React, { FC, useReducer, useCallback } from 'react';
import { handleInputMask } from '@src/utils';
import { Animated } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import * as C from '@src/components';
import { changeSignUpConsumer, useAppDispatch, useAppSelector } from '@src/store';
import { useAppNavigation, useToast as _useToast, useSignUp } from '@src/hooks';
import * as C_S from '../common-styles';
import * as S from './styles';
import { initialState, reducer } from './reducer';
import { validateState } from './validate-state';

type PickerResults = {
  cancelled: boolean;
  uri: string;
  base64: string;
  height: number;
  width: number;
  type: ImagePicker.MediaTypeOptions;
};

// TODO: permitir remover imagem
// TODO: corrigir storage das images em base64
// TODO: focar no input em caso de erro

export const Identifiers: FC = () => {
  const appDispatch = useAppDispatch();
  const consumer = useAppSelector((state) => state.signUpConsumer);
  const useToast = _useToast();
  const { reservePhone } = useSignUp();
  const { navigateTo } = useAppNavigation();

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    image: consumer.image,
    name: consumer.name,
    phone: consumer.phone,
  });

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const handlePickerImage = useCallback(async () => {
    const result = (await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: false, // TODO: pegar a base64
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
    })) as PickerResults;

    if (result.cancelled) return;

    const payload = { uri: result.uri, base64: result.base64 };

    dispatch({ type: 'changeImage', payload });
  }, []);

  const handleNext = useCallback(async () => {
    const response = validateState(state);

    if (response.type === 'error') {
      return useToast.error(response.message);
    }

    const { type: _, ...payload } = response;

    dispatch({ type: 'changeLoading', payload: true });

    const { error } = await reservePhone(payload.phone);

    dispatch({ type: 'changeLoading', payload: false });

    if (error) return;

    appDispatch(changeSignUpConsumer({ ...consumer, ...payload }));

    return navigateTo<'auth'>('sign-up-credentials');
  }, [state, useToast, consumer, appDispatch, navigateTo, reservePhone]);

  return (
    <C_S.Container>
      <C.Header title="Identificação" iconType="navigate-go-back" />
      <C_S.Container>
        <C_S.ScrollContainer showsVerticalScrollIndicator={false}>
          <S.ImageContainer>
            <Animated.View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                height: state.sizeImage.y,
                width: state.sizeImage.x,
              }}
            >
              <C.Avatar uri={state.image.uri} />
            </Animated.View>
            <C.SelectImage onSelect={handlePickerImage} />
          </S.ImageContainer>
          <S.IdentifiersContainer>
            <C_S.InputContainer>
              <C_S.Label>Nome:</C_S.Label>
              <C_S.Input
                onFocus={onOpenInput}
                onBlur={onCloseInput}
                value={state.name}
                onChangeText={(payload) => dispatch({ type: 'changeName', payload })}
                placeholder="Nome completo"
              />
            </C_S.InputContainer>

            <C_S.InputContainer>
              <C_S.Label>Telefone:</C_S.Label>
              <C_S.Input
                onFocus={onOpenInput}
                onBlur={onCloseInput}
                value={state.phone}
                onChangeText={(payload) => {
                  dispatch({ type: 'changePhone', payload: handleInputMask(payload, 'phone') });
                }}
                maxLength={16}
                keyboardType="number-pad"
                placeholder="(99) 9 9999-9999"
              />
            </C_S.InputContainer>
          </S.IdentifiersContainer>
        </C_S.ScrollContainer>

        <C.AnimatedButton
          handle={handleNext}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
