import React, { FC, useReducer, useCallback } from 'react';

import { handleInputMask } from '@src/utils';
import { useAppNavigation, useToast as _useToast, useSignUp } from '@src/hooks';
import { changeSignUpConsumer, useAppDispatch, useAppSelector } from '@src/store';
import * as C from '@src/components';
import * as C_S from '../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';
import { validateState } from './validate-state';

// TODO: focar no input em caso de erro

export const Credentials: FC = () => {
  const appDispatch = useAppDispatch();
  const consumer = useAppSelector((state) => state.signUpConsumer);
  const useToast = _useToast();
  const { reserveCredentials } = useSignUp();
  const { navigateTo } = useAppNavigation();

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    document: consumer.document,
    email: consumer.email,
    password: consumer.password,
    confPassword: consumer.password,
  });

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const handleNext = useCallback(async () => {
    const response = validateState(state);

    if (response.type === 'error') {
      return useToast.error(response.message);
    }

    const { type: _, ...payload } = response;

    dispatch({ type: 'changeLoading', payload: true });

    const { error } = await reserveCredentials(payload.email, payload.document);

    dispatch({ type: 'changeLoading', payload: false });

    if (error) return;

    appDispatch(changeSignUpConsumer({ ...consumer, ...payload }));

    return navigateTo<'auth'>('sign-up-address');
  }, [appDispatch, consumer, state, useToast, navigateTo, reserveCredentials]);

  return (
    <C_S.Container>
      <C.Header title="Credenciais" iconType="navigate-go-back" />
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
                  payload: handleInputMask(payload, 'document'),
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

        <C.AnimatedButton
          handle={handleNext}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
