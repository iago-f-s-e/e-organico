import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const ValuesContent = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
`;

export const Price = styled.Text`
  font-size: ${font.size.medium};
  font-family: ${font.family.semiBold};
  color: ${colors.entity.money};
`;

export const Quantity = styled(Price)`
  color: ${colors.basic.grey};
  margin-left: 5px;
`;

export const Total = styled(Price)`
  font-size: ${font.size.betweenMediumAndLarge};
`;
