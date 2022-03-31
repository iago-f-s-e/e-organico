import { handlerInputMask } from '@root/utils';
import React, { FC, useState, useMemo } from 'react';
import { Animated } from 'react-native';

import * as C from '../../../components';
import * as S from './styles';

// TODO: remover useState e usar useReducer
export const SignUp: FC = () => {
  const [sizeImage] = useState<Animated.ValueXY>(new Animated.ValueXY({ x: 150, y: 150 }));
  const [sizeButton] = useState<Animated.ValueXY>(new Animated.ValueXY({ x: 150, y: 40 }));
  const [opacityButton] = useState<Animated.ValueXY>(new Animated.ValueXY({ x: 1, y: 0 }));
  const [_name, setName] = useState<string>('');
  const [_phone, setPhone] = useState<string>('');

  const onOpenInput = () => {
    Animated.parallel([
      Animated.timing(sizeImage.x, {
        toValue: 100,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(sizeImage.y, {
        toValue: 100,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(opacityButton.x, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(sizeButton.y, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const onCloseInput = () => {
    Animated.parallel([
      Animated.timing(sizeImage.x, {
        toValue: 150,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(sizeImage.y, {
        toValue: 150,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(opacityButton.x, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(sizeButton.y, {
        toValue: 40,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const name = useMemo(() => _name, [_name]);
  const phone = useMemo(() => _phone, [_phone]);

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
              height: sizeImage.y,
              width: sizeImage.x,
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
              onChangeText={(name) => setName(name)}
              value={name}
              placeholder="Nome completo"
            />
          </S.InputContainer>

          <S.InputContainer>
            <S.Label>Telefone:</S.Label>
            <S.Input
              onFocus={onOpenInput}
              onBlur={onCloseInput}
              onChangeText={(phone) => setPhone(handlerInputMask(phone, 'phone'))}
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
            height: sizeButton.y,
            opacity: opacityButton.x,
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <C.NextButton
            handle={() => {
              // TODO: verificar ser telefone existe
              // TODO: navegar para proxima etapa
            }}
          />
        </Animated.View>
      </S.Container>
    </S.Container>
  );
};
