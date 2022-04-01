import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const UserTypeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${font.size.extraLarge};
  font-family: ${font.family.semiBold};
`;

export const ButtonType = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 200px;

  margin-top: 35px;
  border-radius: 100px;

  background-color: ${colors.main.primary};
`;

export const Label = styled.Text`
  color: ${colors.basic.white};
  text-align: center;
  font-size: ${font.size.large};
  font-family: ${font.family.semiBold};
`;
