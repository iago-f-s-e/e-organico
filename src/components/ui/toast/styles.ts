import { font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Message = styled.Text`
  flex: 1;
  margin: 0 16px;
  font-size: ${font.size.medium};
  font-family: ${font.family.semiBold};
`;
