import React, { FC, useState, useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { handlerInputMask } from '@root/utils';

import { colors } from '@root/config/theme';
import logo from '../../assets/icons/logo.png';

import * as S from './styles';

export const Login: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleMask = (value: string) => {
    const phone = value.replace(/\D/g, '');

    if (phone.length > 11) return;

    setPhone(handlerInputMask(phone, 'phone'));
  };

  const handleSignIn = () => {
    setLoading(true);
  };

  const labelOrLoading = useMemo(() => {
    if (!loading) return <S.LabelSignIn>Entrar</S.LabelSignIn>;

    return <ActivityIndicator color={colors.basic.white} size="large" />;
  }, [loading]);

  return (
    <S.Container>
      <S.Logo source={logo} />
      <S.Content>
        <S.Input
          value={phone}
          onChangeText={(value) => handleMask(value)}
          placeholder="Telefone:"
          keyboardType="number-pad"
        />

        <S.Input
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="Senha:"
          secureTextEntry
        />
        <S.SignIn disabled={loading} onPress={handleSignIn}>
          {labelOrLoading}
        </S.SignIn>

        <S.SignUp disabled={loading}>
          <S.LabelSignUp>Cadastrar-se</S.LabelSignUp>
        </S.SignUp>
      </S.Content>
    </S.Container>
  );
};
