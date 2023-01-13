import { colorSystem, dimensionSystem, fontSystem } from '@src/styles';

import styled from 'styled-components/native';

export const StatusBar = styled.View`
  width: 100%;
  height: ${dimensionSystem.statusBar.height}px;

  background-color: ${colorSystem.main.primary};
`;

export const Container = styled.View`
  width: 100%;
  height: ${dimensionSystem.components.header.height}px;

  background-color: ${colorSystem.main.primary};
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
  font-size: ${fontSystem.size.large};
  font-family: ${fontSystem.family.semiBold};
  color: ${colorSystem.basic.white};
`;

export const SubTitle = styled.Text`
  font-size: ${fontSystem.size.medium};
  font-family: ${fontSystem.family.semiBold};
  color: ${colorSystem.basic.white};
`;
