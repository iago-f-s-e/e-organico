import { colors, font } from '@src/config/theme';
import styled from 'styled-components/native';

export const Content = styled.View`
  justify-content: center;

  width: 100%;
  height: 50px;

  padding: 0 5px;

  border-bottom-width: 1px;
  border-color: ${colors.basic.grey};
  background-color: ${colors.basic.white};
`;

export const RowInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  height: 15px;
`;

export const Info = styled.Text`
  font-family: ${font.family.semiBold};
  font-size: ${font.size.small};
  color: ${colors.basic.grey};
`;
