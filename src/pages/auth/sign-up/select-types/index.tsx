import React, { FC, useReducer } from 'react';
import { Picker } from '@react-native-picker/picker';

import * as C from '@src/components';
import * as C_S from '../common-styles';
import * as S from './styles';

import { initialState, reducer } from './reducer';

export const SelectTypes: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const handleNext = () => {};

  return (
    <C_S.Container>
      <C.Header
        handle={() => {
          // TODO: navigation.goBack()
        }}
        iconType="navigate-go-back"
      />
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
