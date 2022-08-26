import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const ButtonLabel = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.large};
  color: ${colors.basic.white};
`;

export const ButtonConfirm = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 40px;

  background-color: ${colors.main.primary};
`;

export const ButtonCancel = styled(ButtonConfirm)`
  background-color: ${colors.actions.danger};
`;

export const Buttons = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  height: 40px;
`;
