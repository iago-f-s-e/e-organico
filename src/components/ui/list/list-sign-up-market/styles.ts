import { colorSystem, fontSystem } from '@src/styles';
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

export const Header = styled.TouchableOpacity<{ selected: boolean }>`
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding: 0 5px;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ selected }) => (selected ? colorSystem.main.primary : colorSystem.basic.white)};
`;

export const ContentAddress = styled.View`
  flex-direction: row;
`;

export const SelectOrRemove = styled.TouchableOpacity<{ selected: boolean }>`
  align-self: center;

  justify-content: center;
  align-items: center;

  width: 50%;
  height: 20px;

  margin: 10px;

  border-radius: 8px;

  background-color: ${({ selected }) => (selected ? colorSystem.actions.danger : colorSystem.main.primary)};
`;

export const Title = styled.Text`
  text-align: center;

  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.basic.greyText};
`;

export const LabelAddress = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};

  color: ${colorSystem.main.secondary};
  margin-right: 5px;
`;

export const DataAddress = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.basic.grey};
`;

export const Name = styled.Text<{ selected: boolean }>`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.large};
  color: ${({ selected }) => (selected ? colorSystem.basic.white : colorSystem.main.primary)};
`;

export const LabelSelectOrRemove = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.basic.white};
`;
