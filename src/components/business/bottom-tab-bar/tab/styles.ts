import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;

  justify-content: center;
  align-items: center;

  height: 50px;

  border-top-width: 1px;
  border-color: ${colorSystem.basic.grey};
`;

export const Content = styled.TouchableOpacity`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.small};
  color: ${colorSystem.main.primary};
`;
