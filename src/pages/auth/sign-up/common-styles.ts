import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colorSystem.basic.white};
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
  border-color: ${colorSystem.main.primary};

  font-family: ${fontSystem.family.medium};
`;

export const Label = styled.Text`
  margin-left: 5%;

  color: ${colorSystem.basic.grey};
  font-family: ${fontSystem.family.semiBold};
`;
