import { colorSystem, dimensionSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;

  justify-content: center;
  align-items: center;
  align-self: center;

  height: 40px;
  width: ${dimensionSystem.screen.width}px;

  z-index: 10;

  background-color: ${colorSystem.main.primary};
`;

export const Label = styled.Text`
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.basic.white};
`;
