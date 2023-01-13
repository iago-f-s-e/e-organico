import { colorSystem, fontSystem } from '@src/styles';
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

  background-color: ${colorSystem.main.primary};
`;

export const Label = styled.Text`
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.basic.white};
  font-family: ${fontSystem.family.bold};
`;
