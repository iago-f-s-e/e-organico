import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const SelectContainer = styled.View`
  justify-content: center;

  height: 40px;
  width: 80%;

  margin: 20px 0;
  padding-left: 16px;

  border-width: 1px;
  border-radius: 100px;
  border-color: ${colors.main.primary};
`;

export const Title = styled.Text`
  font-size: ${font.size.large};
  font-family: ${font.family.medium};
`;
