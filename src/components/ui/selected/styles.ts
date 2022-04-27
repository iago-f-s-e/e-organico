import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  right: 0;

  justify-content: center;
  align-items: center;

  height: 100%;
  width: 75px;
`;

export const Label = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.small};
  color: ${colors.main.primary};
`;
