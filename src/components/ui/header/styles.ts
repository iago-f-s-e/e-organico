import { colors, dimensions, font } from '@src/config/theme';

import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${dimensions.components.header.height}px;

  background-color: ${colors.main.primary};
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
`;

export const BackButton = styled(Button)`
  flex-direction: row;

  position: absolute;
  top: 20px;
  left: 10px;

  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  align-items: center;
  width: 100%;
  height: 50px;

  padding-top: 5px;
`;

export const Title = styled.Text`
  font-size: ${font.size.large};
  font-family: ${font.family.semiBold};
  color: ${colors.basic.white};
`;

export const SubTitle = styled.Text`
  font-size: ${font.size.medium};
  font-family: ${font.family.semiBold};
  color: ${colors.basic.white};
`;
