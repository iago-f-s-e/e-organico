import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;

  justify-content: center;
  align-items: center;
  align-self: center;

  width: 60%;

  border-radius: 100px;

  background-color: ${colorSystem.main.primary};
`;

export const Label = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.basic.white};
`;
