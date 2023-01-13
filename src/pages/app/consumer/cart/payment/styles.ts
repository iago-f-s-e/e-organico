import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Section = styled.View`
  align-self: center;
  justify-content: center;

  width: 90%;
  min-height: 50px;

  border-bottom-width: 1px;
  border-color: ${colorSystem.others.cloud};
`;

export const ValuesSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 30px;
`;

export const Label = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.basic.grey};
`;

export const Data = styled(Label)``;

export const LabelMoney = styled(Label)`
  color: ${colorSystem.basic.black};
`;

export const Money = styled(Label)`
  color: ${colorSystem.main.primary};
`;

export const PaymentName = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.betweenMediumAndLarge};
  color: ${colorSystem.main.secondary};
`;
