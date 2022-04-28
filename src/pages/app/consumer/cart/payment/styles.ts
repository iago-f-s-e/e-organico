import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Section = styled.View`
  align-self: center;
  justify-content: center;

  width: 90%;
  min-height: 50px;

  border-bottom-width: 1px;
  border-color: ${colors.others.cloud};
`;

export const ValuesSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 30px;
`;

export const Label = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.grey};
`;

export const Data = styled(Label)``;

export const LabelMoney = styled(Label)`
  color: ${colors.basic.black};
`;

export const Money = styled(Label)`
  color: ${colors.main.primary};
`;

export const PaymentName = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.betweenMediumAndLarge};
  color: ${colors.main.secondary};
`;
