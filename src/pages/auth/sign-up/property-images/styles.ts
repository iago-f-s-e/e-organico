import { colors, font, dimensions } from '@src/config/theme';
import styled from 'styled-components/native';

const imageSize = `${dimensions.screen.width * 0.45}px`; // width 80%

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

  font-size: ${font.size.large};
  font-family: ${font.family.semiBold};
  color: ${colors.main.primary};
`;
