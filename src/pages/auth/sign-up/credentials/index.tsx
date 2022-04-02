import React, { FC, useReducer } from 'react';

import { handlerInputMask } from '@src/utils';
import * as C from '@src/components';
import * as C_S from '../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

export const Credentials: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const handleNext = () => {
    // TODO: verificar se cpf foi preenchido corretamente com o algoritmo de validação e tamanho igual a 11
    // TODO: verificar se o email foi preenchido corretamente com regex
    // TODO: verificar tamanho mínimo para senha
    // TODO: verificar se as senhas são iguais
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
        <S.CredentialsContainer>
          <C_S.InputContainer>
            <C_S.Label>Email:</C_S.Label>
            <C_S.Input
              onFocus={onOpenInput}
              onBlur={onCloseInput}
              value={state.email}
              onChangeText={(payload) => dispatch({ type: 'changeEmail', payload })}
              placeholder="email@email.com"
            />
          </C_S.InputContainer>

          <C_S.InputContainer>
            <C_S.Label>CPF:</C_S.Label>
            <C_S.Input
              onFocus={onOpenInput}
              onBlur={onCloseInput}
              value={state.document}
              onChangeText={(payload) => {
                dispatch({
                  type: 'changeDocument',
                  payload: handlerInputMask(payload, 'document'),
                });
              }}
              maxLength={14}
              keyboardType="number-pad"
              placeholder="000.000.000-00"
            />
          </C_S.InputContainer>

          <C_S.InputContainer>
            <C_S.Label>Senha:</C_S.Label>
            <C_S.Input
              onFocus={onOpenInput}
              onBlur={onCloseInput}
              value={state.password}
              onChangeText={(payload) => dispatch({ type: 'changePassword', payload })}
              secureTextEntry
              placeholder="*********"
            />
          </C_S.InputContainer>

          <C_S.InputContainer>
            <C_S.Label>Confirme sua senha: </C_S.Label>
            <C_S.Input
              onFocus={onOpenInput}
              onBlur={onCloseInput}
              value={state.confPassword}
              onChangeText={(payload) => dispatch({ type: 'changeConfPassword', payload })}
              secureTextEntry
              placeholder="*********"
            />
          </C_S.InputContainer>
        </S.CredentialsContainer>

        <C.NextButton
          handle={handleNext}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
