import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  width: 100px;

  justify-content: space-between;

  border-radius: 5px;
  border-width: 1px;
  border-color: ${colorSystem.main.primary};

  overflow: hidden;

  margin: 0 1px;
`;

export const Border = styled.View`
  flex: 1;
  width: 1px;
  background-color: ${colorSystem.main.primary};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;

  height: 25px;
  width: 100%;

  background-color: ${colorSystem.main.primary};
`;

export const Footer = styled.View`
  height: 10px;
  width: 100%;

  background-color: ${colorSystem.main.primary};
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
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.small};
  color: ${colorSystem.main.secondary};
`;

export const Day = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.small};
  color: ${colorSystem.basic.white};
`;
