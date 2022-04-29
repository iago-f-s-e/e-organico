import { colors, font, shadow } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-self: center;
  justify-content: center;
  align-items: center;

  min-height: 80px;
  width: 97%;

  margin: 10px 0;
`;

export const ShadowContainer = styled(Container).attrs(shadow)`
  border-radius: 10px;

  background-color: ${colors.basic.white};
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
  font-family: ${font.family.semiBold};
  font-size: ${font.size.large};
  color: ${colors.basic.black};
`;

export const Info = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.small};
  color: ${colors.basic.grey};
`;
