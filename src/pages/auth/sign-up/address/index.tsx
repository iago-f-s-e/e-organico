import React, { FC, useReducer, useMemo, useCallback } from 'react';

import { handlerInputMask } from '@src/utils';

import * as C from '@src/components';
import { useToast as _useToast } from '@src/hooks';
import { changeSignUpConsumer, useAppDispatch, useAppSelector } from '@src/store';
import * as C_S from '../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';
import { validateState } from './validate-state';

export const Address: FC = () => {
  const appDispatch = useAppDispatch();
  const { signUpConsumer, signUpUserType } = useAppSelector((state) => state);
  const useToast = _useToast();

  const [state, dispatch] = useReducer(reducer, { ...initialState, ...signUpConsumer.address });

  const placeholderComplement = useMemo(() => {
    if (signUpUserType.type === 'consumer') return 'Bloco 99 Apto 99 (opcional)';

    return 'Fazenda nova esperança';
  }, [signUpUserType.type]);

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const handleNext = useCallback(() => {
    // TODO: navegar para finished caso seja comprador e para property_images caso seja produtor
    // TODO: trocar o label para "confirmar" caso seja comprador

    const response = validateState(state);

    if (response.type === 'error') {
      return useToast.error(response.message);
    }

    const { type: _, ...payload } = response;

    appDispatch(changeSignUpConsumer({ ...signUpConsumer, ...payload }));
  }, [appDispatch, signUpConsumer, state, useToast]);

  return (
    <C_S.Container>
      <C.Header
        handle={() => {
          // TODO: navigation.goBack()
        }}
        iconType="navigate-go-back"
        title="Cadastre seu endereço"
      />
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
