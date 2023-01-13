import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

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

export const Quantity = styled(Price)`
  color: ${colorSystem.basic.grey};
  margin-left: 5px;
`;

export const Total = styled(Price)`
  font-size: ${fontSystem.size.betweenMediumAndLarge};
`;
