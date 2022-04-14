import { colors, font, dimensions } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${dimensions.components.header.height}px;

  background-color: ${colors.main.primary};
`;

export const HeaderTitle = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.large};
  color: ${colors.basic.white};
`;
