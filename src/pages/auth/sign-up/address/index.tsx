import React, { FC, useReducer, useMemo, useCallback } from 'react';

import { handlerInputMask } from '@src/utils';

import * as C from '@src/components';
import { useAppNavigation, useToast as _useToast, useSignUp, useStorage } from '@src/hooks';
import { changeSignUpConsumer, useAppDispatch, useAppSelector } from '@src/store';
import * as C_S from '../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';
import { validateState } from './validate-state';

export const Address: FC = () => {
  const appDispatch = useAppDispatch();
  const { signUpConsumer, signUpUserType } = useAppSelector((state) => state);
  const useToast = _useToast();
  const { registerConsumer } = useSignUp();
  const { clearPersist } = useStorage();
  const { navigateTo, goBack } = useAppNavigation();

  const [state, dispatch] = useReducer(reducer, { ...initialState, ...signUpConsumer.address });

  const placeholderComplement = useMemo(() => {
    if (signUpUserType.type === 'consumer') return 'Bloco 99 Apto 99 (opcional)';

    return 'Fazenda Nova Esperança (opcional)';
  }, [signUpUserType.type]);

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const handleUserType = useCallback(async () => {
    if (signUpUserType.type === 'producer') return navigateTo('sign-up-property-images');

    dispatch({ type: 'changeLoading', payload: true });

    const { error } = await registerConsumer(signUpConsumer);

    dispatch({ type: 'changeLoading', payload: false });

    if (error) return;

    clearPersist();

    return navigateTo('sign-up-finished');
  }, [signUpConsumer, navigateTo, registerConsumer, signUpUserType, clearPersist]);

  const handleNext = useCallback(() => {
    const response = validateState(state);

    if (response.type === 'error') {
      return useToast.error(response.message);
    }

    const { type: _, ...address } = response;

    appDispatch(changeSignUpConsumer({ ...signUpConsumer, address }));

    return handleUserType();
  }, [appDispatch, signUpConsumer, state, useToast, handleUserType]);

  return (
    <C_S.Container>
      <C.Header handle={goBack} iconType="navigate-go-back" title="Cadastre seu endereço" />
      <C_S.Container>
        <S.Scroll showsVerticalScrollIndicator={false}>
          <S.CustomerContainer>
            <C_S.InputContainer>
              <C_S.Label>Rua:</C_S.Label>
              <C_S.Input
                onFocus={onOpenInput}
                onBlur={onCloseInput}
                value={state.street}
                onChangeText={(payload) => dispatch({ type: 'changeStreet', payload })}
                placeholder="Rua Dr. Azevedo"
                autoCapitalize="words"
              />
            </C_S.InputContainer>

            <C_S.InputContainer>
              <C_S.Label>Número:</C_S.Label>
              <C_S.Input
                onFocus={onOpenInput}
                onBlur={onCloseInput}
                value={state.number}
                onChangeText={(payload) => dispatch({ type: 'changeNumber', payload })}
                keyboardType="number-pad"
                placeholder="99 (opcional)"
              />
            </C_S.InputContainer>

            <C_S.InputContainer>
              <C_S.Label>CEP:</C_S.Label>
              <C_S.Input
                onFocus={onOpenInput}
                onBlur={onCloseInput}
                value={state.zipCode}
                onChangeText={(payload) => {
                  dispatch({
                    type: 'changeZipCode',
                    payload: handlerInputMask(payload, 'zipCode'),
                  });
                }}
                maxLength={9}
                keyboardType="number-pad"
                placeholder="99999-999"
              />
            </C_S.InputContainer>

            <C_S.InputContainer>
              <C_S.Label>Bairro:</C_S.Label>
              <C_S.Input
                onFocus={onOpenInput}
                onBlur={onCloseInput}
                value={state.district}
                onChangeText={(payload) => dispatch({ type: 'changeDistrict', payload })}
                placeholder="Centro"
                autoCapitalize="words"
              />
            </C_S.InputContainer>

            <C_S.InputContainer>
              <C_S.Label>Cidade:</C_S.Label>
              <C_S.Input
                onFocus={onOpenInput}
                onBlur={onCloseInput}
                value={state.city}
                onChangeText={(payload) => dispatch({ type: 'changeCity', payload })}
                placeholder="Aracaju"
                autoCapitalize="words"
              />
            </C_S.InputContainer>

            <C_S.InputContainer>
              <C_S.Label>Estado:</C_S.Label>
              <C_S.Input
                onFocus={onOpenInput}
                onBlur={onCloseInput}
                value={state.state}
                onChangeText={(payload) => dispatch({ type: 'changeState', payload })}
                placeholder="Sergipe"
                autoCapitalize="words"
              />
            </C_S.InputContainer>

            <C_S.InputContainer>
              <C_S.Label>Complemento:</C_S.Label>
              <C_S.Input
                onFocus={onOpenInput}
                onBlur={onCloseInput}
                value={state.complement}
                onChangeText={(payload) => dispatch({ type: 'changeComplement', payload })}
                placeholder={placeholderComplement}
              />
            </C_S.InputContainer>
          </S.CustomerContainer>
        </S.Scroll>

        <C.NextButton
          handle={handleNext}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
