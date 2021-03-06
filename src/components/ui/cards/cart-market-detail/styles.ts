import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const ButtonConfirm = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 45%;
  height: 30px;

  border-radius: 5px;

  background-color: ${colors.main.primary};
`;

export const ButtonCancel = styled(ButtonConfirm)`
  background-color: ${colors.actions.danger};
`;

export const ButtonLabel = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.white};
`;

export const WorkDaysSection = styled.View`
  flex: 1;

  height: 150px;
`;
