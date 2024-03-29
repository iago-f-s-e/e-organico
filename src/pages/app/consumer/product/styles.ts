import { colorSystem, dimensionSystem, fontSystem } from '@src/styles';
import styled from 'styled-components/native';

const imageSize = dimensionSystem.screen.width * 0.65; // width: 65%

export const ImageContainer = styled.View`
  align-self: center;

  width: ${imageSize}px;
  height: ${imageSize}px;

  border-radius: 15px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 60px;
  width: 100%;

  border-top-width: 1px;
  border-color: ${colorSystem.basic.grey};
`;

export const InputContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  border-width: 1px;
  border-color: ${colorSystem.main.primary};

  width: 35%;
  height: 50px;
`;

export const InputButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 55%;
  height: 50px;

  border-radius: 5px;

  background-color: ${colorSystem.main.primary};
`;

export const IncOrDecButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 25%;
  height: 100%;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const InfoContent = styled.View`
  justify-content: center;

  width: 100%;
  height: 50px;

  padding: 0 10px;
`;

export const InfoSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoLabel = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};

  color: ${colorSystem.basic.black};
  margin-right: 5px;
`;

export const InfoData = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.basic.grey};
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.basic.black};
`;

export const MoneyLabel = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};

  color: ${colorSystem.entity.money};
  margin-right: 5px;
`;

export const Money = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.betweenMediumAndLarge};
  color: ${colorSystem.entity.money};
`;

export const Quantity = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.betweenMediumAndLarge};
  color: ${colorSystem.main.primary};
`;

export const IncOrDecLabel = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.main.primary};
`;

export const ButtonLabel = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.medium};
  color: ${colorSystem.basic.white};
`;

export const ImageContent = styled.Image`
  width: 100%;
  height: 100%;
`;
