import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const PaymentContent = styled.View`
  align-self: center;
  justify-content: center;

  width: 90%;
  height: 50px;
`;

export const PaymentName = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.betweenMediumAndLarge};
  color: ${colors.main.primary};
`;
