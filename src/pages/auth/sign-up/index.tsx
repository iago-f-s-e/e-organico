import React, { FC, useMemo, useReducer } from 'react';
import { handlerInputMask } from '@src/utils';
import { Animated } from 'react-native';

import * as C from '@src/components';
import * as S from './styles';
import { initialState, reducer } from './reducer';

export const SignUp: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const name = useMemo(() => state.name, [state.name]);
  const phone = useMemo(() => state.phone, [state.phone]);

  const handleNext = () => {
    // TODO: verificar se telefone foi preenchido corretamente (tamanho igual a 11)
    // TODO: verificar se o nome foi preenchido
    // TODO: verificar se escolheu a foto de perfil
    // TODO: adicionar useToast para mostrar logs
  };

  return (
    <S.Container>
      <C.Header
        handle={() => {
          // TODO: navigation.goBack()
        }}
        iconType="navigate-go-back"
      />
      <S.Container>
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
            <C.Avatar />
          </Animated.View>
          <C.SelectImage
            onSelect={() => {
              // TODO: selecionar imagem
            }}
          />
        </S.ImageContainer>
        <S.CredentialContainer>
          <S.InputContainer>
            <S.Label>Nome:</S.Label>
            <S.Input
              onFocus={onOpenInput}
              onBlur={onCloseInput}
              onChangeText={(name) => dispatch({ type: 'changeName', payload: name })}
              value={name}
              placeholder="Nome completo"
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Telefone:</S.Label>
            <S.Input
              onFocus={onOpenInput}
              onBlur={onCloseInput}
              onChangeText={(phone) => {
                dispatch({ type: 'changePhone', payload: handlerInputMask(phone, 'phone') });
              }}
              value={phone}
              maxLength={16}
              keyboardType="number-pad"
              placeholder="(99) 9 9999-9999"
            />
          </S.InputContainer>
        </S.CredentialContainer>

        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: state.sizeButton.y,
            opacity: state.opacityButton.x,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <C.NextButton handle={handleNext} loading={state.loading} />
        </Animated.View>
      </S.Container>
    </S.Container>
  );
};
