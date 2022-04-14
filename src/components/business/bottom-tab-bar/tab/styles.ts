import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;

  justify-content: center;
  align-items: center;

  height: 50px;

  border-top-width: 1px;
  border-color: ${colors.basic.grey};
`;

export const Content = styled.TouchableOpacity`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.small};
  color: ${colors.main.primary};
`;
