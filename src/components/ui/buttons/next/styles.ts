import { colors, font } from '@root/config/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;

  justify-content: center;
  align-items: center;
  align-self: center;

  width: 60%;

  border-radius: 100px;

  background-color: ${colors.main.primary};
`;

export const Label = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.large};
  color: ${colors.basic.white};
`;
