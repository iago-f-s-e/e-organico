import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ImageContainer = styled.View`
  padding-top: 20px;
  flex: 0.5;
`;

export const CredentialContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.View`
  justify-content: center;

  height: 70px;
  width: 70%;

  margin: 16px 0;
`;

export const Input = styled.TextInput`
  height: 40px;

  padding-left: 16px;

  border-width: 1px;
  border-radius: 100px;
  border-color: ${colors.main.primary};

  font-family: ${font.family.medium};
`;

export const Label = styled.Text`
  margin-left: 5%;

  color: ${colors.basic.grey};
  font-family: ${font.family.semiBold};
`;
