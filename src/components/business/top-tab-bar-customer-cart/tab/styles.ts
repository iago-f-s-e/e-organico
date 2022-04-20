import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  height: 40px;

  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-color: ${colors.basic.grey};
`;

export const Label = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.medium};
  color: ${colors.main.primary};
`;
