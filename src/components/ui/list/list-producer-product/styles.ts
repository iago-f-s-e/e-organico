import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  align-self: center;
  justify-content: center;
  align-items: center;

  min-height: 80px;
  width: 97%;

  margin: 10px 0;
`;

export const ValuesContent = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
`;

export const Price = styled.Text`
  font-size: ${fontSystem.size.medium};
  font-family: ${fontSystem.family.semiBold};
  color: ${colorSystem.entity.money};
`;

export const Stock = styled(Price)`
  color: ${colorSystem.basic.grey};
`;

export const Total = styled(Price)`
  font-size: ${fontSystem.size.betweenMediumAndLarge};
`;
