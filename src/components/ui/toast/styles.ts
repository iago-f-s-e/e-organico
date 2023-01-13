import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Message = styled.Text`
  flex: 1;
  margin: 0 16px;
  font-size: ${fontSystem.size.medium};
  font-family: ${fontSystem.family.semiBold};
  color: ${colorSystem.basic.white};
`;
