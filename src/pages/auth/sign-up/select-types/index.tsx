import React, { FC, useReducer, useCallback } from 'react';
import { Picker } from '@react-native-picker/picker';

import { useAppSelector } from '@src/store';
import { useAppNavigation, useSignUp, useStorage, useToast as _useToast } from '@src/hooks';

import * as C from '@src/components';
import * as C_S from '../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

// TODO: navegar para cadastro de feiras

export const SelectTypes: FC = () => {
  // const appDispatch = useAppDispatch();
  const { signUpProducer } = useAppSelector((state) => state);
  const { navigateTo, goBack } = useAppNavigation();
  const { registerProducer } = useSignUp();
  const { clearPersist } = useStorage();
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    certification: signUpProducer.certification,
    delivery: signUpProducer.makeDelivery,
  });

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const handleNext = useCallback(async () => {
    const { certification, delivery: makeDelivery } = state;

    dispatch({ type: 'changeLoading', payload: true });

    const { error } = await registerProducer({ ...signUpProducer, makeDelivery, certification });

    dispatch({ type: 'changeLoading', payload: false });

    if (error) return;

    clearPersist();

    // TODO: atualizar o state e só finalizar depois de escolher os produtos inicias
    // appDispatch(
    //   changeSignUpProducer({
    //     ...signUpProducer,
    //     makeDelivery,
    //     certification,
    //   }),
    // );

    return navigateTo('sign-up-finished');
  }, [state, navigateTo, signUpProducer, registerProducer, clearPersist]);

  return (
    <C_S.Container>
      <C.Header handle={goBack} iconType="navigate-go-back" />
      <C_S.Container>
        <S.Container>
          <S.Title>Tipo de certificado</S.Title>
          <S.SelectContainer>
            <Picker
              onFocus={onOpenInput}
              onBlur={onCloseInput}
              onValueChange={(payload) => dispatch({ type: 'changeCertification', payload })}
              selectedValue={state.certification}
            >
              <Picker.Item label="Em conversão" value="IN CONVERSION" />
              <Picker.Item label="Certificadora" value="AUDIT" />
              <Picker.Item label="OCS" value="OCS" />
              <Picker.Item label="SPG" value="SPG" />
            </Picker>
          </S.SelectContainer>

          <S.Title>Realiza entrega a domicilio</S.Title>
          <S.SelectContainer>
            <Picker
              onFocus={onOpenInput}
              onBlur={onCloseInput}
              onValueChange={(payload) => dispatch({ type: 'changeDelivery', payload })}
              selectedValue={state.delivery}
            >
              <Picker.Item label="Sim" value="YES" />
              <Picker.Item label="Não" value="NO" />
            </Picker>
          </S.SelectContainer>
        </S.Container>

        <C.NextButton
          handle={handleNext}
          animated={{ height: state.sizeButton.y, opacity: state.opacityButton.x }}
          loading={state.loading}
        />
      </C_S.Container>
    </C_S.Container>
  );
};
