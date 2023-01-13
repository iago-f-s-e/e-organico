import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const ButtonConfirm = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 45%;
  height: 30px;

  border-radius: 5px;

  background-color: ${colorSystem.main.primary};
`;

export const ButtonCancel = styled(ButtonConfirm)`
  background-color: ${colorSystem.actions.danger};
`;

export const ButtonLabel = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.basic.white};
`;

export const WorkDaysSection = styled.View`
  flex: 1;

  height: 150px;
`;
