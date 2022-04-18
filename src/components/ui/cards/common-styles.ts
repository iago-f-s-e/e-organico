import { colors, font, shadow } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.View.attrs(shadow)`
  flex: 1;

  align-self: center;

  width: 90%;
  height: 200px;

  border-radius: 5px;

  background-color: ${colors.basic.white};
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;

  padding: 0 5px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100px;
`;

export const SubTitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  height: 20px;

  border-top-width: 0.5px;
  border-color: ${colors.basic.grey};
`;

export const ImageContainer = styled.View`
  width: 90px;
  height: 90px;
`;

export const InfoContent = styled.View`
  flex: 1;
  height: 90px;
`;

export const ImageContent = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Name = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.large};
  color: ${colors.basic.black};
`;

export const Info = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.grey};
`;

export const SubTitle = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.basic.grey};
`;
