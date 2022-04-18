import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const PriceContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const Price = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.large};
  color: ${colors.entity.money};

  margin-right: 2px;
`;
