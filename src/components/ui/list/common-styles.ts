import { colorSystem, fontSystem, shadowSystem, dimensionSystem } from '@src/styles';
import styled from 'styled-components/native';

const width = dimensionSystem.screen.width * 0.97; // width: 97%

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  align-self: center;
  justify-content: center;
  align-items: center;

  min-height: 80px;
  width: ${width}px;

  margin: 10px 0;
`;

export const ShadowContainer = styled(Container).attrs(shadowSystem)`
  border-radius: 10px;

  background-color: ${colorSystem.basic.white};
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

export const ImageContainer = styled.View`
  height: 60px;
  width: 60px;

  border-radius: 100px;
`;

export const Content = styled.TouchableOpacity`
  justify-content: center;

  height: 100%;
  width: 70%;

  padding: 5px;
`;

export const Like = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 10%;
`;

export const RowInfo = styled.View`
  flex-direction: row;
  align-items: center;
  height: 20px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.large};
  color: ${colorSystem.basic.black};
`;

export const Info = styled.Text`
  font-family: ${fontSystem.family.semiBold};
  font-size: ${fontSystem.size.small};
  color: ${colorSystem.basic.grey};
`;
