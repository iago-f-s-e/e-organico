import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  height: 40px;

  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-color: ${colorSystem.basic.grey};
  background-color: ${colorSystem.basic.white};
`;

export const Label = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.main.primary};
`;
