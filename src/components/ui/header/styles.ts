import { colors, dimensions, font } from '@src/config/theme';

import styled from 'styled-components/native';

export const StatusBar = styled.View`
  width: 100%;
  height: ${dimensions.statusBar.height}px;

  background-color: ${colors.main.primary};
`;

export const Container = styled.View`
  width: 100%;
  height: ${dimensions.components.header.height}px;

  background-color: ${colors.main.primary};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;

  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const Actions = styled.View`
  position: absolute;
  right: 0px;

  align-items: center;
  justify-content: center;

  width: 50px;
  height: 100%;
`;

export const Info = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;

  padding-top: 5px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 5px;

  width: 50px;
  height: 100%;
`;

export const LogoutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-top: 5px;

  height: 30px;
  width: 100%;

  /* background-color: #f00; */
`;

export const Title = styled.Text`
  font-size: ${font.size.large};
  font-family: ${font.family.semiBold};
  color: ${colors.basic.white};
`;

export const SubTitle = styled.Text`
  font-size: ${font.size.medium};
  font-family: ${font.family.semiBold};
  color: ${colors.basic.white};
`;
