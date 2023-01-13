import { colorSystem, dimensionSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  border: ${colorSystem.basic.white};
`;

export const Content = styled.View`
  align-items: center;
  margin-top: 40px;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.View`
  justify-content: center;

  height: 70px;
  width: ${dimensionSystem.screen.width - 64}px;

  margin: 16px 0;
`;

export const Input = styled.TextInput`
  flex: 1;

  justify-content: center;
  padding-left: 16px;

  height: 40px;

  border-width: 1px;
  border-radius: 20px;
  border-color: ${colorSystem.main.primary};
`;

export const Label = styled.Text`
  margin-left: 5%;

  color: ${colorSystem.basic.grey};
  font-family: ${fontSystem.family.semiBold};
`;

export const SignIn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  height: 40px;
  width: ${dimensionSystem.screen.width - 64}px;

  border-radius: 20px;
  background-color: ${colorSystem.main.primary};
`;

export const SignUp = styled(SignIn)`
  width: ${dimensionSystem.screen.width - 200}px;
  height: 30px;

  margin-bottom: 10px;
`;

export const LabelSignIn = styled.Text`
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.basic.white};
  font-weight: bold;
`;

export const LabelSignUp = styled(LabelSignIn)`
  font-size: ${fontSystem.size.medium};
`;
