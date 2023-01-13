import { colorSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const PickerContainer = styled.View`
  width: 90%;
  height: 40px;
`;

export const DatePickerContent = styled.TouchableOpacity`
  flex-direction: row;

  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;

  border-width: 1px;
  border-radius: 5px;
  border-color: ${colorSystem.main.primary};
`;

export const PickerContent = styled.View`
  justify-content: center;
  width: 50%;
  height: 100%;

  border-width: 1px;
  border-radius: 5px;
  border-color: ${colorSystem.main.primary};
`;

export const Header = styled.TouchableOpacity<{ selected: boolean }>`
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding: 0 5px;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ selected }) => (selected ? colorSystem.main.primary : colorSystem.basic.white)};
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

export const StockAndPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 90%;
  height: 40px;
`;
export const InputContainer = styled.View`
  width: 45%;
  height: 100%;
`;

export const StockContainer = styled.View`
  width: 100%;
  height: 100%;

  flex-direction: row;

  border-width: 1px;
  border-radius: 5px;
  border-color: ${colorSystem.main.primary};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 12px;
  border-radius: 3px;

  background-color: ${colorSystem.main.primary};
`;

export const InputStock = styled.TextInput`
  flex: 1;

  text-align: center;
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.main.primary};
`;

export const InputPrice = styled.TextInput`
  height: 100%;
  width: 100%;

  padding-left: 3px;
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.basic.white};
`;

export const Label = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.small};
  color: ${colorSystem.main.primary};
`;

export const LabelDate = styled.Text`
  margin-left: 10px;

  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.main.primary};
`;
