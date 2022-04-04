import React, { FC, useReducer, useCallback } from 'react';
import { handlerInputMask } from '@src/utils';
import { Animated } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import * as C from '@src/components';
import { changeSignUpConsumer, useAppDispatch, useAppSelector } from '@src/store';
import { useToast as _useToast } from '@src/hooks';
import * as C_S from '../common-styles';
import * as S from './styles';
import { initialState, reducer } from './reducer';
import { validateState } from './validate-state';

type PickerResults = {
  cancelled: boolean;
  uri: string;
  base64: string;
};

// TODO: permitir remover imagem
// TODO: focar no input em caso de erro
// TODO: navegar para credenciais

export const Identifiers: FC = () => {
  const appDispatch = useAppDispatch();
  const consumer = useAppSelector((state) => state.signUpConsumer);
  const useToast = _useToast();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const handlePickerImage = useCallback(async () => {
    const result = (await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
    })) as PickerResults;

    if (result.cancelled) return;

    const { cancelled: _, ...payload } = result;

    dispatch({ type: 'changeImage', payload });
  }, []);

  const handleNext = useCallback(() => {
    const response = validateState(state);

    if (response.type === 'error') {
      return useToast.error(response.message);
    }

    const { type: _, ...payload } = response;

    appDispatch(changeSignUpConsumer({ ...consumer, ...payload }));
  }, [state, useToast, consumer, appDispatch]);

  return (
    <C_S.Container>
      <C.Header
        handle={() => {
          // TODO: navigation.goBack()
        }}
        iconType="navigate-go-back"
      />
      <C_S.Container>
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
                dispatch({ type: 'changePhone', payload: handlerInputMask(payload, 'phone') });
              }}
              maxLength={16}
              keyboardType="number-pad"
              placeholder="(99) 9 9999-9999"
            />
          </C_S.InputContainer>
        </S.IdentifiersContainer>

        <C.NextButton
          handle={handleNext}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
