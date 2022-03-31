import { colors, font } from '@root/config/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;

  width: 60%;
  height: 40px;

  margin-top: 10px;
  padding: 0 16px 0 16px;

  border-radius: 100px;

  background-color: ${colors.main.primary};
`;

export const Label = styled.Text`
  font-size: ${font.size.large};
  color: ${colors.basic.white};
  font-family: ${font.family.bold};
`;
