import React, { FC, useReducer, useCallback } from 'react';

import { handlerInputMask } from '@src/utils';
import * as C from '@src/components';
import { useAppNavigation, useToast as _useToast } from '@src/hooks';
import { changeSignUpConsumer, useAppDispatch, useAppSelector } from '@src/store';
import * as C_S from '../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';
import { validateState } from './validate-state';

// TODO: focar no input em caso de erro

export const Credentials: FC = () => {
  const appDispatch = useAppDispatch();
  const consumer = useAppSelector((state) => state.signUpConsumer);
  const useToast = _useToast();
  const { navigateTo, goBack } = useAppNavigation();

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    document: consumer.document,
    email: consumer.email,
    password: consumer.password,
    confPassword: consumer.password,
  });

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const handleNext = useCallback(() => {
    const response = validateState(state);

    if (response.type === 'error') {
      return useToast.error(response.message);
    }

    const { type: _, ...payload } = response;

    appDispatch(changeSignUpConsumer({ ...consumer, ...payload }));

    return navigateTo('sign-up-address');
  }, [appDispatch, consumer, state, useToast, navigateTo]);

  return (
    <C_S.Container>
      <C.Header handle={goBack} iconType="navigate-go-back" />
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
