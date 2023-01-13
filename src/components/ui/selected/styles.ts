import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  right: 0;

  justify-content: center;
  align-items: center;

  height: 100%;
  width: 75px;
`;

export const Label = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.small};
  color: ${colorSystem.main.primary};
`;
