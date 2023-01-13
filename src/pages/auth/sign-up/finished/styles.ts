import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const FinishedContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 400px;
`;

export const Image = styled.Image``;

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;

  justify-content: center;
  align-items: center;

  height: 40px;
  width: 70%;

  border-radius: 100px;

  background-color: ${colorSystem.main.primary};
`;

export const Label = styled.Text`
  font-size: ${fontSystem.size.large};
  font-family: ${fontSystem.family.semiBold};
  color: ${colorSystem.basic.white};
`;
