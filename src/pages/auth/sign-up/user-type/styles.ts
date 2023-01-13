import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const UserTypeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${fontSystem.size.extraLarge};
  font-family: ${fontSystem.family.semiBold};
`;

export const ButtonType = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 200px;

  margin-top: 35px;
  border-radius: 100px;

  background-color: ${colorSystem.main.primary};
`;

export const Label = styled.Text`
  color: ${colorSystem.basic.white};
  text-align: center;
  font-size: ${fontSystem.size.large};
  font-family: ${fontSystem.family.semiBold};
`;
