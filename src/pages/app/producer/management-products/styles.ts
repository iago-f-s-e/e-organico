import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const ButtonLabel = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.basic.white};
`;

export const ButtonConfirm = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 40px;

  background-color: ${colorSystem.main.primary};
`;

export const ButtonCancel = styled(ButtonConfirm)`
  background-color: ${colorSystem.actions.danger};
`;

export const Buttons = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  height: 40px;
`;
