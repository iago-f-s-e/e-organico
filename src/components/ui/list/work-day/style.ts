import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  width: 100px;

  justify-content: space-between;
`;

export const Border = styled.View`
  flex: 1;
  width: 1px;
  background-color: ${colors.main.primary};
`;

export const Main = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;

  height: 25px;
  width: 100%;

  background-color: ${colors.main.primary};
`;

export const Footer = styled.View`
  height: 10px;
  width: 100%;

  background-color: ${colors.main.primary};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Icon = styled.View`
  position: absolute;
  bottom: 10px;
  right: 10px;

  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
`;

export const Time = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.small};
  color: ${colors.main.secondary};
`;

export const Day = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.small};
  color: ${colors.basic.white};
`;
