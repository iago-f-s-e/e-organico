import React, { FC, useMemo, useReducer } from 'react';
import { handlerInputMask } from '@src/utils';
import { Animated } from 'react-native';

import * as C from '@src/components';
import * as C_S from '../common-styles';
import * as S from './styles';
import { initialState, reducer } from './reducer';

export const Identifiers: FC = () => {
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
            <C.Avatar />
          </Animated.View>
          <C.SelectImage
            onSelect={() => {
              // TODO: selecionar imagem
            }}
          />
        </S.ImageContainer>
        <S.IdentifiersContainer>
          <C_S.InputContainer>
            <C_S.Label>Nome:</C_S.Label>
            <C_S.Input
              onFocus={onOpenInput}
              onBlur={onCloseInput}
              onChangeText={(name) => dispatch({ type: 'changeName', payload: name })}
              value={name}
              placeholder="Nome completo"
            />
          </C_S.InputContainer>

          <C_S.InputContainer>
            <C_S.Label>Telefone:</C_S.Label>
            <C_S.Input
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
