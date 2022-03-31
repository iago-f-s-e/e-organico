import { colors, dimensions, font } from '@root/config/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;

  justify-content: center;
  align-items: center;
  align-self: center;

  height: 40px;
  width: ${dimensions.screen.width}px;

  z-index: 10;

  background-color: ${colors.main.primary};
`;

export const Label = styled.Text`
  font-size: ${font.size.large};
  color: ${colors.basic.white};
`;
