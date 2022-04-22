import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  height: 80px;
  min-width: 300px;

  margin: 10px 5px;
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
