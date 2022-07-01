import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const GeneralInformation = styled.View`
  align-self: center;
  justify-content: center;

  width: 90%;
  min-height: 50px;

  border-bottom-width: 1px;
  border-color: ${colors.others.cloud};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 5px 0;
`;

export const Buttons = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-around;
  align-items: center;

  height: 65px;

  border-top-width: 1px;
  border-color: ${colors.others.cloud};
`;

export const Button = styled.View`
  justify-content: center;
  align-items: center;

  width: 45%;
  height: 40px;

  overflow: hidden;
  border-radius: 5px;
`;

export const Data = styled.Text`
  margin-left: 5px;
  font-family: ${font.family.medium};
  font-size: ${font.size.medium};
  color: ${colors.basic.black};
`;

export const Label = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.grey};
`;

export const Money = styled(Data)`
  color: ${colors.entity.money};
`;
