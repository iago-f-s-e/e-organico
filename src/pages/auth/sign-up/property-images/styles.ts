import { colorSystem, fontSystem, dimensionSystem } from '@src/styles';
import styled from 'styled-components/native';

const imageSize = `${dimensionSystem.screen.width * 0.45}px`; // width 80%

export const PropertyImagesContainer = styled.View`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin: 15px 0 0 0;
`;

export const ImageContainer = styled.View`
  width: ${imageSize};
  height: ${imageSize};
`;

export const SelectImage = styled.TouchableOpacity``;

export const ImageContent = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: ${fontSystem.size.large};
  font-family: ${fontSystem.family.semiBold};
  color: ${colorSystem.main.primary};
`;
