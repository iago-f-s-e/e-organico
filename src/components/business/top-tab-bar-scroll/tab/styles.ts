import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 40px;
  min-width: 150px;

  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-color: ${colorSystem.basic.grey};
  background-color: ${colorSystem.basic.white};
`;

export const Content = styled.View`
  height: 20px;
  width: 150px;

  justify-content: center;
  align-items: center;

  border-width: 1px;
`;

export const Label = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.main.primary};
`;
