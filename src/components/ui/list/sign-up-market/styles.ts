import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerWorkDays = styled.View`
  height: 125px;

  border-radius: 5px;

  overflow: hidden;
`;

export const ContainerAddress = styled.View`
  height: 100px;
  padding: 10px;
`;

export const Section = styled.View``;

export const Header = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding: 0 5px;
  align-items: center;
  justify-content: space-between;
`;

export const ContentAddress = styled.View`
  flex-direction: row;
`;

export const SelectOrRemove = styled.TouchableOpacity`
  align-self: center;

  justify-content: center;
  align-items: center;

  width: 50%;
  height: 20px;

  margin: 10px;

  border-radius: 8px;

  background-color: ${colors.main.primary};
`;

export const Name = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.large};
  color: ${colors.main.primary};
`;

export const Title = styled.Text`
  text-align: center;

  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.greyText};
`;

export const LabelAddress = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};

  color: ${colors.main.secondary};
  margin-right: 5px;
`;

export const DataAddress = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.grey};
`;

export const LabelConfirm = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.white};
`;
