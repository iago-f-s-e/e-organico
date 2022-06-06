import React, { FC, useReducer } from 'react';
import { ActivityIndicator, Animated } from 'react-native';
import { handleInputMask } from '@src/utils';

import { colors } from '@src/config/theme';
import logo from '@src/assets/icons/logo.png';

import { useAppNavigation } from '@src/hooks';
import { IfElse } from '@src/components';
import * as S from './styles';

import { initialState, reducer } from './reducer';

// TODO: implementar handleSignIn
export const Login: FC = () => {
  const { navigateTo } = useAppNavigation();

  const [state, dispatch] = useReducer(reducer, initialState);

  const onOpenInput = () => dispatch({ type: 'onOpenInput' });
  const onCloseInput = () => dispatch({ type: 'onCloseInput' });

  const handleLogin = () => {
    return navigateTo<'auth'>('app');
  };

  return (
    <S.Container>
      <Animated.View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          height: state.sizeImage.y,
          width: state.sizeImage.x,
        }}
      >
        <S.Logo resizeMode="stretch" source={logo} />
      </Animated.View>
      <S.Content>
        <S.InputContainer>
          <S.Label>Telefone:</S.Label>
          <S.Input
            onFocus={onOpenInput}
            onBlur={onCloseInput}
            value={state.phone}
            onChangeText={(payload) => {
              dispatch({ type: 'changePhone', payload: handleInputMask(payload, 'phone') });
            }}
            maxLength={16}
            keyboardType="number-pad"
            placeholder="(99) 9 9999-9999"
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>Senha:</S.Label>
          <S.Input
            onFocus={onOpenInput}
            onBlur={onCloseInput}
            value={state.password}
            onChangeText={(payload) => dispatch({ type: 'changePassword', payload })}
            secureTextEntry
            placeholder="*********"
          />
        </S.InputContainer>
        <S.SignIn disabled={state.loading} onPress={handleLogin}>
          <IfElse
            condition={state.loading}
            render={{
              toBeFalsy: () => <S.LabelSignIn>Entrar</S.LabelSignIn>,
              toBeTruthy: () => <ActivityIndicator color={colors.basic.white} size="large" />,
            }}
          />
        </S.SignIn>

        <S.SignUp disabled={state.loading} onPress={() => navigateTo<'auth'>('terms')}>
          <S.LabelSignUp>Cadastrar-se</S.LabelSignUp>
        </S.SignUp>
      </S.Content>
    </S.Container>
  );
};
