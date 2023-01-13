import { colorSystem, shadowSystem, dimensionSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

const imageSize = dimensionSystem.screen.width * 0.65;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;

  min-height: 150px;
  width: 97%;

  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-color: ${colorSystem.others.cloud};
`;

export const ImageContainer = styled.View.attrs(shadowSystem)`
  width: ${imageSize}px;
  height: ${imageSize}px;

  overflow: hidden;
  border-radius: 5px;

  background-color: ${colorSystem.basic.white};
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const PickerContainer = styled.View`
  width: 90%;
  height: 40px;
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

export const Name = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.main.primary};
`;

export const Buttons = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  height: 40px;
`;
