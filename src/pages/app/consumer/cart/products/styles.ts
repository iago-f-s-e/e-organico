import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Content = styled.View`
  justify-content: center;

  width: 100%;
  height: 50px;

  padding: 0 5px;

  border-bottom-width: 1px;
  border-color: ${colorSystem.basic.grey};
  background-color: ${colorSystem.basic.white};
`;

export const RowInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  height: 15px;
`;

export const Info = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.small};
  color: ${colorSystem.basic.grey};
`;
