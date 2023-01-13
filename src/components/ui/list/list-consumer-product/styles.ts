import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const PriceContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const Price = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.entity.money};

  margin-right: 2px;
`;
