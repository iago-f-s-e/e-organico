import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 40px;
  min-width: 150px;

  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-color: ${colors.basic.grey};
  background-color: ${colors.basic.white};
`;

export const Content = styled.View`
  height: 20px;
  width: 150px;

  justify-content: center;
  align-items: center;

  border-width: 1px;
`;

export const Label = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.main.primary};
`;
